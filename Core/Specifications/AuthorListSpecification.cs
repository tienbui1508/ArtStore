using Core.Entities;
using Core.Specifications;

namespace Core.Specification
{
	public class AuthorListSpecification : BaseSpecification<Product, string>
	{
		public AuthorListSpecification()
		{
			AddSelect(x => x.Author);
			ApplyDistinct();
		}
	}
}
