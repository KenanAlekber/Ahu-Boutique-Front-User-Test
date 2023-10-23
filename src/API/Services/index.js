import { BasketService } from "./Basket"
import { BrandService } from "./Brand"
import { CategoryService } from "./Category"
import { OrderService } from "./Order"
import { ProductService } from "./Product"
import { ProductReviewService } from "./ProductReview"
import { SliderService } from "./Slider"
import { StoreDatasService } from "./StoreDatas"

export const useService = () => {
    const services = {
        productService: new ProductService(),
        brandService: new BrandService(),
        categoryService: new CategoryService(),
        orderService: new OrderService(),
        basketService: new BasketService(),
        productReviewService: new ProductReviewService(),
        sliderService: new SliderService(),
        storeDataService: new StoreDatasService(),
    }
    return services
}