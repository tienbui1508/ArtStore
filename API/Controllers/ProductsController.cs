using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductsController(IUnitOfWork unitOfWork, IWebHostEnvironment webHostEnvironment) : BaseApiController
{

	// [Cache(600)]
	[HttpGet]
	public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts([FromQuery] ProductSpecParams specParams)
	{
		var spec = new ProductSpecification(specParams);

		return await CreatePagedResult(unitOfWork.Repository<Product>(), spec, specParams.PageIndex, specParams.PageSize);
	}

	// [Cache(600)]

	[HttpGet("{id:int}")] // api/products/2
	public async Task<ActionResult<Product>> GetProduct(int id)
	{
		var product = await unitOfWork.Repository<Product>().GetByIdAsync(id);

		if (product == null) return NotFound();

		return product;
	}

	[InvalidateCache("api/products|")]
	[Authorize(Roles = "Admin")]
	[HttpPost]
	public async Task<ActionResult<Product>> CreateProduct(Product product)
	{
		unitOfWork.Repository<Product>().Add(product);

		if (await unitOfWork.Complete())
		{
			return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
		}

		return BadRequest("Problem creating product");
	}

	[InvalidateCache("api/products|")]
	[Authorize(Roles = "Admin")]
	[HttpPut("{id:int}")]
	public async Task<ActionResult> UpdateProduct(int id, Product product)
	{
		if (product.Id != id || !ProductExists(id))
			return BadRequest("Cannot update product");

		unitOfWork.Repository<Product>().Update(product);

		if (await unitOfWork.Complete())
		{
			return NoContent();
		}

		return BadRequest("Problem updating product");
	}

	[InvalidateCache("api/products|")]
	[Authorize(Roles = "Admin")]
	[HttpDelete("{id:int}")]
	public async Task<ActionResult> DeleteProduct(int id)
	{
		var product = await unitOfWork.Repository<Product>().GetByIdAsync(id);

		if (product == null) return NotFound();

		unitOfWork.Repository<Product>().Remove(product);

		if (await unitOfWork.Complete())
		{
			return NoContent();
		}

		return BadRequest("Problem deleting product");
	}

	[Cache(10000)]

	[HttpGet("authors")]
	public async Task<ActionResult<IReadOnlyList<string>>> GetAuthors()
	{
		var spec = new AuthorListSpecification();

		return Ok(await unitOfWork.Repository<Product>().ListAsync(spec));
	}

	[Cache(10000)]

	[HttpGet("types")]
	public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
	{
		var spec = new TypeListSpecification();

		return Ok(await unitOfWork.Repository<Product>().ListAsync(spec));
	}
	private bool ProductExists(int id)
	{
		return unitOfWork.Repository<Product>().Exists(id);
	}

	[InvalidateCache("api/products|")]
	[Authorize(Roles = "Admin")]
	[HttpPut("update-stock/{productId}")]
	public async Task<ActionResult> UpdateStock(int productId, [FromBody] int newQuantity)
	{
		var productItem = await unitOfWork.Repository<Product>().GetByIdAsync(productId);

		if (productItem == null)
		{
			return NotFound("Product not found");
		}

		productItem.QuantityInStock = newQuantity;

		unitOfWork.Repository<Product>().Update(productItem);

		if (await unitOfWork.Complete())
		{
			return Ok();
		}

		return BadRequest("Problem updating stock");
	}



	[HttpPut("add-photo/{productId}")]
	public async Task<ActionResult<string>> UploadPhoto(int productId, IFormFile file)
	{
		// Validate product existence
		var productItem = await unitOfWork.Repository<Product>().GetByIdAsync(productId);

		if (productItem == null)
		{
			return NotFound("Product not found");
		}

		// Validate file
		if (file == null || file.Length == 0)
		{
			return BadRequest("Invalid file");
		}

		// Use IWebHostEnvironment to get the root path
		var wwwRootPath = webHostEnvironment.WebRootPath; // This will point to the 'wwwroot' folder in production
		var uploadsFolder = Path.Combine(wwwRootPath, "images", "products");

		// Ensure the folder exists
		if (!Directory.Exists(uploadsFolder))
		{
			Directory.CreateDirectory(uploadsFolder);
		}

		// Create a unique file name

		var fileExtension = Path.GetExtension(file.FileName);
		var fileName = $"{productItem.Id}{fileExtension}";
		var filePath = Path.Combine(uploadsFolder, fileName);

		// Save the file to the folder
		using (var stream = new FileStream(filePath, FileMode.Create))
		{
			await file.CopyToAsync(stream);
		}

		// Update the product's PictureUrl
		productItem.PictureUrl = $"images/products/{fileName}"; // URL for accessing the image


		// Update the product in the repository
		unitOfWork.Repository<Product>().Update(productItem);

		// Save changes to the database
		if (await unitOfWork.Complete())
		{
			return Ok(productItem.PictureUrl);  // Return the URL of the uploaded image
		}

		// If something went wrong, return an error
		return BadRequest("Problem uploading photo");
	}

}
