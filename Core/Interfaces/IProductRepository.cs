using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
	Task<IReadOnlyList<Product>> GetProductsAsync(string? author, string? type, string? sort);
	Task<Product?> GetProductByIdAsync(int id);
	Task<IReadOnlyList<string>> GetAuthorsAsync();
	Task<IReadOnlyList<string>> GetTypesAsync();
	void AddProduct(Product product);
	void UpdateProduct(Product product);
	void DeleteProduct(Product product);
	bool ProductExists(int id);
	Task<bool> SaveChangesAsync();
}
