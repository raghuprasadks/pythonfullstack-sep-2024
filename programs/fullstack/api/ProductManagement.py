from Product import Product

class ProductManagement():    
    products = []
    
    def add_Product(self,product):       
        self.products.append(product)
        

    def get_products(self):
        return self.products

    def get_product(self, name):
        for product in self.products:
            if product.name == name:
                return product
        return None

    
    def update_product(self, name, price):
        product = self.get_product(name)
        if product is not None:
            product.price = price
        return product

    def delete_product(self, name):
        product = self.get_product(name)
        if product is not None:
            self.products.remove(product)
        return product
"""
pm = ProductManagement()
prod1 = Product("1","Laptop","Dell","45000")
prod2 = Product("2","Mobile","Samsung","25000")
prod3 = Product("3","Tablet","Apple","35000")
print("add product")
pm.add_Product(prod1)
pm.add_Product(prod2)
pm.add_Product(prod3)
print("get products")
prodlist =pm.get_products()
for prod in prodlist:
    #print("code ",prod.code, "name ",prod.name, "supplier ",prod.supplier, "price ",prod.price) 
    print(prod)

print("search by product name")
prod = pm.get_product("Mobile")
print(prod) 
print("update product price")
prod = pm.update_product("Mobile", "30000")
print("after updation of the price ",prod)
print("delete product")
prod = pm.delete_product("Mobile")
print("after deletion")
prodlist =pm.get_products()
for prod in prodlist:
    print(prod)
"""