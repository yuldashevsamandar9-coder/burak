import ProductModel from "../schema/Product.modul";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
}
export default ProductService;
