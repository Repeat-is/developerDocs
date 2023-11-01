To use our widgets you need an API key and the shop UUID

### Product overview widget
Example: https://sjostrand.is/pages/askriftir

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