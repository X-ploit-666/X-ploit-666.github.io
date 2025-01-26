
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/polyfills-legacy.CvzTbL_C.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/app-legacy.D7SrUaWy.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/LegacyVaultedShippingMethods-legacy.B9lrdmfg.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/DeliveryMethodSelectorSection-legacy.CS9kiQxd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/useUnauthenticatedErrorModal-legacy.DrD4YQ56.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/AmazonPayPCIButton-legacy.DVP0j1JQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/ShopPayCaptcha-legacy.qqbz3MPn.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/CheckoutAsGuest-legacy.Bkf8VpsE.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/useRefEffect-legacy.wwXbocZ7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/ShopPayLogo-legacy.SIoY7rhQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/hooks-legacy.DPwOwTlP.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/LocalizationExtensionField-legacy.C5QlKLBV.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/useShowShopPayOptin-legacy.Cf-frfBw.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/Rollup-legacy.C1jAqZqS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/useShopPayRequiresVerification-legacy.BNzheS6F.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/Section-legacy.CLw1wT_D.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/GooglePayPCIButton-legacy.DZJmnxxT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/PayButtonSection-legacy.OG4HIV3V.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/RageClickCapture-legacy.3wEtbhwO.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/useInstallmentsErrorHandler-legacy.DFNAm3I_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/index-legacy.BPU_4-M-.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/DutyOptions-legacy.qwnKtgV7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/SubscriptionPriceBreakdown-legacy.CQZMRr75.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/useAmazonContact-legacy.CdCexzo4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/StockProblemsLineItemList-legacy.ywKaGHKz.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/useGetBuyWithPrimeCheckoutSessionId-legacy.D_Dsmnjh.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.ru/index-legacy.DMcnTs5B.js"];
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
  