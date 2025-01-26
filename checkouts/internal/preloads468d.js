
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills-legacy.wUSHWjDQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app-legacy.BqJjxsH7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LegacyVaultedShippingMethods-legacy.CLPd56Fj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection-legacy.DmCzvSeM.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useUnauthenticatedErrorModal-legacy.Bte8_io9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/AmazonPayPCIButton-legacy.C76vn_MJ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayCaptcha-legacy.Dl1u17r8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/CheckoutAsGuest-legacy.BdXCLFdH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useRefEffect-legacy.Dgj-9qou.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayLogo-legacy.sYMrUMXK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/hooks-legacy.DQyDgtPc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField-legacy.HdxbZf7g.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShowShopPayOptin-legacy.COZnoKJg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Rollup-legacy.DT2N6_yW.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useShopPayRequiresVerification-legacy.DkjZ0_4n.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/Section-legacy.CjCF8bF3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/GooglePayPCIButton-legacy.BDf0v9uY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection-legacy.t6YMZogu.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/RageClickCapture-legacy.DwgpOcX2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useInstallmentsErrorHandler-legacy.BcEcgX5o.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.DEnVrIwA.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DutyOptions-legacy.2Aw0ZuZe.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/SubscriptionPriceBreakdown-legacy.BTdwKnMN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useAmazonContact-legacy.DCRxsdJv.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StockProblemsLineItemList-legacy.DRjuOxR3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useGetBuyWithPrimeCheckoutSessionId-legacy.NppX9_OT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index-legacy.Co3cM8lh.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  