using System;
using Core.Entities;
using Core.Specifications;

namespace Core.Specification;

public class ProductSpecification : BaseSpecification<Product>
{
	private string? author;
	private string? type;

	public ProductSpecification(string? author, string? type)
	{
		this.author = author;
		this.type = type;
	}

	public ProductSpecification(string? author, string? type, string? sort) : base(x =>
	(string.IsNullOrWhiteSpace(author) || x.Author == author) &&
	(string.IsNullOrWhiteSpace(type) || x.Type == type))
	{
		switch (sort)
		{
			case "priceAsc":
				AddOrderBy(x => x.Price);
				break;
			case "priceDesc":
				AddOrderByDescending(x => x.Price);
				break;
			default:
				AddOrderBy(x => x.Name);
				break;
		}
	}
}
