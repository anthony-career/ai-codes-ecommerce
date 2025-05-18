Please convert this HTML prototype into a modern React application with the following specifications:

1. Project Structure:

- Create a new React project using Vite
- Use TypeScript for type safety
- Implement component-based architecture
- Use Tailwind CSS for styling (already included in the prototype)
- Include necessary dependencies (boxicons, Stripe)

2. Component Breakdown:
   Create the following React components:

- Header (with cart icon and count)
- ProductDetailsModal
- CheckoutModal
- PaymentForm (with credit card, PayPal, and mobile money options)
- CartItems
- CartSummary

3. State Management:

- Implement React Context or Redux for state management
- Create a cart context to manage:
  - Cart items
  - Cart total
  - Cart count
  - Add/remove items functionality

4. Styling Requirements:

- Maintain the existing Tailwind CSS configuration
- Keep the custom styles for Stripe elements
- Preserve the color scheme (primary: #2563eb, secondary: #475569, accent: #f59e0b)

5. Functionality Implementation:

- Convert all onclick handlers to React event handlers
- Implement modal open/close functionality using React state
- Set up Stripe integration for payment processing
- Add form validation for the checkout process
- Implement responsive design (already present in the HTML)

6. Additional Requirements:

- Add proper TypeScript interfaces for all props and state
- Implement error handling for API calls
- Add loading states for async operations
- Include proper accessibility attributes
- Add proper meta tags and SEO optimization
