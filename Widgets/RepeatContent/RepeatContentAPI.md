# Content API

## Step 1: Add the RepeatContent widget to your footer.

You have to add EVERYTHING below to your footer, and replace the placeholders with your own values.

```html
<!-- Start -->
<div class="repeatRoot"></div>
<style>
  .repeatHidden {
    display: none !important;
  }
</style>
<script>
  window.repeatSettings = {
    shopUUID: "<YOUR_SHOP_UUID>",
    apiKey: "<YOUR_FRONTEND_API_KEY>",
    buySubscriptionUrl: "/buy-subscription/", // You decide this URL, you need to add
    repeatAuthId: "your_repeat_auth_id",
    contentDetailsUrl: "/content-details/", // You decide this URL, you need to add
    colorPrimary: "#2f354b",
    language: "is",
  };
</script>
<script
  type="module"
  crossorigin
  src="https://content.repeat.is/assets/repeatContent.js"
></script>
<link
  rel="stylesheet"
  href="https://content.repeat.is/assets/repeatContent.css"
/>
<!-- End -->
```

## Step 2: Create a "Content details" page

This page should have same url as in the `contentDetailsUrl` in your settings.

All you need to do is add this html to the page

```html
<div id="repeatRoot" data-blocks="contentDetails"></div>
```

## Step 3: Create a "Buy subscription" page

This page should have same url as in the `buySubscriptionUrl` in your settings.
This page is totally custom. You should describe your product / products and link to the checkout page.

## Step 4: Create a page that shows the content overview

Example where this is done on the front page: https://normid.is

Example where this is done on a subpage: https://l7homestudio.com

All you need to do on this page is add this html

```html
<div id="repeatRoot" data-blocks="login,contentOverview"></div>
```

More complicated example:
You can optionally add data-tags, data-excluded-tags, data-ordering, data-language- data-tag-selector

```html
<div
  id="repeatRoot"
  data-blocks="login,contentOverview"
  data-tags="tag1,tag2"
  data-excluded-tags="tag3,tag4"
  data-language="is"
  data-tag-selector="true"
  data-ordering="-date"
></div>

<!-- data-ordering can be on of: date, -date, created, -created, title, -title -->
<!-- data-tag-selector example can be seen on https://normid.is -->
```
