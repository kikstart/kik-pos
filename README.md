# KiK POS
Point of Sales System in KikStart Stack

# The Domain
The system is designed to adapt to any business operation. The levels of supply chain that can be handled in the system are as follows.
* Manufacturer - Entities that manufacture a product
* Distributor  - Entities that buy products from [manufacturers] and sell to [wholesalers/retailers]
* Wholesaler   - Entities that buy products from [distributors] and sell to [retailers]
* Retailer     - Entities that buy products from [wholesalers/distributors] and sell to [consumers]
* Consumer     - Entities that buy products from [retailers] and [use] them

```
Manufacturer -> Distributor ->| ----->|    
            |--––------> Wholesaler ->| ---->|
            |-------------------> Retailer ->|
            |---------------------------> Consumer
```

The supported business workflows in the system are
* Manufacturer -> Consumer
* Manufacturer -> Retailer -> Consumer
* Manufacturer -> Wholesaler -> Retailer -> Consumer
* Manufacturer -> Distributor -> Retailer -> Consumer
* Manufacturer -> Distributor -> Wholesaler -> Retailer -> Consumer

# Integration
KiK POS is designed to enable seamless integration with KiK ERP to simplify business management and obtain insights when you wish to scale up your business.