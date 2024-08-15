using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController(IProductRepository repo) : ControllerBase
{

	[HttpGet]
	public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts(string? author, string? type, string? sort)
	{
		return Ok(await repo.GetProductsAsync(author, type, sort));
	}

	[HttpGet("{id:int}")] // api/products/2
	public async Task<ActionResult<Product>> GetProduct(int id)
	{
		var product = await repo.GetProductByIdAsync(id);

		if (product == null) return NotFound();

		return product;
	}

	[HttpPost]
	public async Task<ActionResult<Product>> CreateProduct(Product product)
	{
		repo.AddProduct(product);

		if (await repo.SaveChangesAsync())
		{
			return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
		}

		return BadRequest("Problem creating product");
	}

	[HttpPut("{id:int}")]
	public async Task<ActionResult> UpdateProduct(int id, Product product)
	{
		if (product.Id != id || !ProductExists(id))
			return BadRequest("Cannot update product");

		repo.UpdateProduct(product);

		if (await repo.SaveChangesAsync())
		{
			return NoContent();
		}

		return BadRequest("Problem updating product");
	}

	[HttpDelete("{id:int}")]
	public async Task<ActionResult> DeleteProduct(int id)
	{
		var product = await repo.GetProductByIdAsync(id);

		if (product == null) return NotFound();

		repo.DeleteProduct(product);

		if (await repo.SaveChangesAsync())
		{
			return NoContent();
		}

		return BadRequest("Problem deleting product");
	}

	[HttpGet("authors")]
	public async Task<ActionResult<IReadOnlyList<string>>> GetAuthors()
	{
		return Ok(await repo.GetAuthorsAsync());
	}

	[HttpGet("types")]
	public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
	{
		return Ok(await repo.GetTypesAsync());
	}
	private bool ProductExists(int id)
	{
		return repo.ProductExists(id);
	}

}
