import { Product } from './entities'
import { Collection } from './representation'
import { Credentials, HttpHelper } from './utils'

export class ProductClient {

    private readonly PATH_PRODUCTS = '/products'
    private credentials: Credentials
    private httpHelper: HttpHelper

    constructor(_credentials: Credentials) {
        this.credentials = _credentials
        this.httpHelper = new HttpHelper(this.credentials)
    }

    public async GetAll(filter?: string, top?: number, skip?: number, expandGroups?: boolean) {
        let params = { '$filter': filter, '$top': top, '$skip': skip, 'expandGroups': expandGroups }
        let products = await this.httpHelper.GetCollection<Product>(Product, this.PATH_PRODUCTS, params)
        products.forEach((product) => {
            product.SetCredentials(this.credentials)
        })
        return products
    }

    public async Get(pid: string) {
        let product = await this.httpHelper.Get<Product>(Product, pid)
        return product.SetCredentials(this.credentials)
    }

    public async GetMeta(pid: string) {
        return await this.httpHelper.Head(pid)
    }

    public async Create(pid: string, payload: Product | string) {
        return await this.httpHelper.Put(pid, undefined, undefined, payload)
    }

    public async Update(pid: string, ifMatch: string, payload: Product) {
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Patch(pid, undefined, headers, payload)
    }

    public async Delete(pid: string, deleteSubscriptions: boolean, ifMatch: string) {
        let params = { 'deleteSubscriptions': deleteSubscriptions }
        let headers = { 'If-Match': ifMatch }
        return await this.httpHelper.Delete(pid, params, headers)
    }
}