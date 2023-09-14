## First Part - Setting up commerce layer

1. (Browser) Create Organisation on the existing account 
2. (If not created automatically) create one application for the CLI
3. (Terminal) Install cl CLI
    1.  `npm install -g @commercelayer/cli`
4. (Terminal) connect to the organisation with settings from the CLI app
    1. `cl app:login -a outer456 -o outerorbit-456 -i teFKNQTBI5Mzr0k-2_G03VPsVFObrnQELTSlr8Doq9g -s Nf96WQS8PTTptfJxIfbeU9KQAvZ38w5sllNdju7Fw8Q`
5. clone workshop assets from [git@github.com](mailto:git@github.com):f-picca/jakala-workshop.git
6. (Browser) Enter the dashboard and see the initial screen with all the steps to set up an org
7. (Browser) create a merchant with an address
8. (Terminal) install the `resources` plugin `commercelayer plugins:install resources`
9. (Terminal) show the newly created entity and use the address of the merchant to create a stock location
    1. `Cl list merchants` 
    2. show merchants with the related address `cl list merchants -i address`
    3. Copy the address id and use it to create a stock location `cl create stock_location -a name=“Milan Warehouse” -r address=BgnguXOnEe`
10. (Browser) Create an inventory model using the stock location created in .8 for both stock and return locations, use `no split` as inventory strategy
11. (Terminal) Create pricelists
    1. `Cl create price_list -a name=“EUR prices” currency_code=“EUR”`
    2. `Cl create price_list -a name=“USD prices” currency_code=“USD”`
12. (Terminal) Create a market
    1. List inventory models with id `cl list inventory_models -f id`
    2. List price lists with id `cl list price_lists -f id name`
    3. List merchants with id  `cl list merchants -f id`
    4. Create Europe market using the ids as references for related resources `cl create market -a name="Europe" -r inventory_model=AZQoQSprAW price_list=mkoGMCVGvk merchant=NxOreHoykn`
13. (Browser) create USD market
14. (Browser) create Shipping Category “All Products”
15. (Browser) Create Shipping zones for EU (IT|NL|DE|FR|ES|GR) and US
16. (Browser) Create Shipping methods “Europe Standard Shipping” and “US Standard Shipping”
17. (Browser) Create Manual Payment gateway “Wire Transfer”
18. (Browser) Create payment method “Wire Transfer” for Europe and US Market
19. (Browser) Create a Tax Calculator
    1. Settings > Tax Calculator > New Tax Calculator > Manual Tax Calculator
    2. Give the Tax Calculator a Name (i.e. My Tax Calculator)
    3. Create a Tax Rule 
        1. Name: Italy VAT
        2. Tax rate: 0.22
        3. Country Code regex: IT
    4. hit create
20. Import SKUs, prices, and stock items
    1. (Terminal) install the imports plugin `commercelayer plugins:install imports`
    2. Go to `<download location>/assets/data` and see the four files 
    3. Edit skus file and add the shipping category id created at step .13(`cl list shipping_categories -f id`)
    4. Import the skus `cl import -t skus -C -i` 
    5. Get price lists id `cl list price_lists -f id name`
    6. Import EUR prices using the price list id for EUR prices as parent `cl import -t prices -p mkoGMCVGvk -C -i prices_eur`
    7. Import EUR prices using the price list id for USD prices as parent `cl import -t prices -p JlOXZCrKdL -C -i prices_usd`
    8. Get stock location id `cl list stock_locations -f id`
    9. Import stock locations using the stock location id as parent `cl import -t stock_items -p zkmoyuDozn -C -i stock_items`
21. (Browser) refresh the dashboard and see it’s now showing sales data instead of the onboarding steps
22. (Browser) create a percentage discount promo
    1. First we create an sku list containing SKU2 named 10% off promo items
    2. Go to promotions, new Promotion, Percentage Discount
    3. Set the promo name “10% off”, market “Europe”, Percentage “10”, and use the sku list for both products and activation rules
    

## Second Part - Sample Frontend application with Next.js

🛒