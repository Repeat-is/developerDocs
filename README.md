# Developer documentation
Developer docs for various Repeat.is products

## API
Our API documentation can be found here:
https://repeat.is/api/v1/

## Widgets
To use our widgets you will need an API key and the shop UUID

### Product overview widget

```
  <link rel="stylesheet" href="https://productswidget.repeat.is/assets/repeatProductOverview.css">
  <script>
      window.repeatAPIKey = '<YOUR_FRONTEND_API_KEY>';
      window.uuid = '<YOUR_SHOP_UUID>';
  
      window.repeatColorPrimary = '#000';
      window.repeatColumns = 2;
      window.repeatBorderRadius = '0px';
      window.repeatSearchBar = false;
      window.repeatProductOrdering = '-title';
  </script>
  <script type="module" crossorigin="" src="https://productswidget.repeat.is/assets/repeatProductOverview.js"></script>
  <div id="repeatProductOverview"></div>
```
