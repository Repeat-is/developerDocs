# Developer documentation
Developer docs for various Repeat.is products

## API
Our API documentation can be found here:
https://repeat.is/api/v1/



## Widgets
To use our widgets you will need an API key and the shop UUID



### Product overview widget
Example: https://sjostrand.is/pages/askriftir
Docs: https://github.com/Repeat-is/developerDocs/blob/main/ProductOverviewWidget.md



### Shopify - Buy subscripton button 
![image](https://github.com/Repeat-is/developerDocs/assets/6918659/c718d327-fdf5-42e8-beaa-0b0367ce03b4)

Create a new file in the themes "snippets" folder. 
Call it repeat.liquid and add this code (edit variable according to your needs):

```
<script>
  window.repeatAPIKey = '<YOUR_API_KEY>';

	window.repeatColorPrimary = 'black';
	window.repeatBorderRadius = '0px';
	window.repeatButtonHeight = '46px';
	window.repeatShowDivider = true;
	window.repeatSameUrlForAll = '/pages/askriftir';
	window.repeatDividerText = 'eða sparaðu 10% í áskrift';
	window.repeatMainButtonText = 'Skrá í áskrift';
	window.repeatMaskBackground = 'rgba(122, 122, 122, 0.35)';

	window.repeatMainButtonStyle = {
	  marginBottom: 30
	}

	window.repeatVariantButtonStyle = {
	  color: 'black',

	}

	{% if product.available %}
	{% assign product_var = product %}

	{% elsif section.settings.product.available %}
	  {% assign product_var = section.settings.product %}
	{% endif %}

	window.shopifyVariantList = [];
	{% for variant in product_var.variants %}
	  window.shopifyVariantList.push("{{ variant.id }}");
	{% endfor %}
</script>

<div id="repeatRoot"></div>

<script src="https://shopify.repeat.is/assets/repeatShopify.js" type="module" defer></script>

```

Then find your the file containing "Add to cart" button and below that add this:

```
  {% render 'repeat' %}
```
