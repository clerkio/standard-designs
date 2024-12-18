(function (w, d) {
  let h = document.querySelector(`#{{ content.id }}`);
  if (window.clerk_api_data && Object.keys(window.clerk_api_data).length > 0) {
      let els = h.querySelectorAll('[data-clerk-ident]');
      els.forEach(function (el, i) {
          let key = el.dataset.clerkIdent;
          let price = (window.clerk_api_data[key]) ? window.clerk_api_data[key].price : '';
          let list_price = (window.clerk_api_data[key]) ? window.clerk_api_data[key].list_price : '';
          let price_el = el.querySelector(`[data-price-ident]`);
          let list_price_el = el.querySelector(`[data-list-price-ident]`);

          if (price_el && price) {
              price_el.innerHTML = price;
          }
          if (list_price_el && list_price) {
              list_price_el.innerHTML = list_price;
          }
      });
  } else {
      window.addEventListener('clerk_shopify_api', function () {
          let els = h.querySelectorAll('[data-clerk-ident]');
          els.forEach(function (el, i) {
              let key = el.dataset.clerkIdent;
              let price = (window.clerk_api_data[key]) ? window.clerk_api_data[key].price : '';
              let list_price = (window.clerk_api_data[key]) ? window.clerk_api_data[key].list_price : '';
              let price_el = el.querySelector(`[data-price-ident]`);
              let list_price_el = el.querySelector(`[data-list-price-ident]`);

              if (price_el && price) {
                  price_el.innerHTML = price;
              }
              if (list_price_el && list_price) {
                  list_price_el.innerHTML = list_price;
              }
          });
      });
  }
})(window, document);