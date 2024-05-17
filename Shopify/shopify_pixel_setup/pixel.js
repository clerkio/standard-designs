analytics.subscribe('clerk_pixel_context', (event) => {
	browser.localStorage.setItem('clerkPixelContext', JSON.stringify(event.customData))
})

analytics.subscribe('checkout_completed', async (event) => {
	const pixelContextRaw = await browser.localStorage.getItem('clerkPixelContext')
	const pixelContext = await JSON.parse(pixelContextRaw)
	const checkout = event.data.checkout
	fetch(`https://api.clerk.io/v2/log/sale/shopify`, {
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify({
			sale: checkout.order.id,
			key: pixelContext.localeApiKey,
			visitor: pixelContext.visitor,
		}),
	})
})
