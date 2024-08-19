using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class ProductRepository(StoreContext context) : IProductRepository
{
	public void AddProduct(Product product)
	{
		context.Products.Add(product);
	}

	public void DeleteProduct(Product product)
	{
		context.Products.Remove(product);
	}

	public async Task<IReadOnlyList<string>> GetAuthorsAsync()
	{
		return await context.Products.Select(x => x.Author).Distinct().ToListAsync();
	}

	public async Task<Product?> GetProductByIdAsync(int id)
	{
		return await context.Products.FindAsync(id);
	}

	public async Task<IReadOnlyList<Product>> GetProductsAsync(string? author, string? type, string? sort)
	{
		var query = context.Products.AsQueryable();

		if (!string.IsNullOrEmpty(author))
		{
			query = query.Where(x => x.Author == author);
		}

		if (!string.IsNullOrEmpty(type))
		{
			query = query.Where(x => x.Type == type);
		}


		query = sort switch
		{
			"priceAsc" => query.OrderBy(x => x.Price),
			"priceDesc" => query.OrderByDescending(x => x.Price),
			_ => query.OrderBy(x => x.Name)
		};

		return await query.ToListAsync();
	}

	public async Task<IReadOnlyList<string>> GetTypesAsync()
	{
		return await context.Products.Select(x => x.Type).Distinct().ToListAsync();

	}

	public bool ProductExists(int id)
	{
		return context.Products.Any(x => x.Id == id);
	}

	public async Task<bool> SaveChangesAsync()
	{
		return await context.SaveChangesAsync() > 0;
	}

	public void UpdateProduct(Product product)
	{
		context.Entry(product).State = EntityState.Modified;
	}
}
