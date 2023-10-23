import { HttpClient } from '../HTTPClients';

export class BrandService extends HttpClient {
    
    constructor() {
        super("https://localhost:7094")
    }

    async getAllBrands() {
        return await this.get(`api/Brand`);
    }

    async getBrandById(id) {
        return await this.get(`api/Brand/${id}`);
    }
}