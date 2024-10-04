class Product():
    """
    test method
    """
    code:str
    name:str
    supplier:str
    price:float

    n2=0
    def test(self):
        return "Hello World"
    
    def add(self, num1, num2):
        self.n1 = num1
        self.n2 = num2
        return num1 + num2
    
    def info():
        return "This is a product class :"

    """
    constructor in python
    """    
    def __init__(self,code,name,supplier,price,pan=None):
        print("Constructor is called")
        self.code = code
        self.name = name
        self.supplier = supplier
        self.price = price  

    def information(self):
        return "This is a product class :" + self.code + " " + self.name + " " + self.supplier + " " + str(self.price)

    def __str__(self):
        return "This is a product class :" + self.code + " " + self.name + " " + self.supplier + " " + str(self.price)
"""
prod1 = Product()
print(prod1.test())
result = prod1.add(10, 20)
print("result of addition is ",result)
print(Product.info())
#print("info using object ",prod1.info())
"""
prod1 = Product("P001","Laptop","Dell",45000)
print(prod1.code)
print(prod1.information())
print("product 1 object ",prod1)