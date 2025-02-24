# Rent - Find Your Perfect Home

**Rent** is a web application to help users find the perfect house or apartment for rent or purchase. With a clean and modern interface, users can discover properties and view key details, all while enjoying a smooth and optimized experience.

## Project Link

[https://github.com/sofiacostamagna/rent-app.git]

## Features

- Interactive search for houses and apartments.
- Testimonials section with user comments.
- Pricing section with plans and details.
- Contact form for inquiries.
- Smooth animations to enhance user experience.

## Project Structure

The project is structured as follows:

src/
│── components/
    │── NavBar.tsx # NavBar section component
    │── Hero.tsx # Hero section component
    │── Features.tsx # Component showing main features
    │── Testimonials.tsx # Component showing user testimonials
    │── Pricing.tsx # Pricing section component
    │── Contact.tsx # Contact form component
    │── Footer.tsx # Footer component
│── pages/
    │── Home.tsx # Main page
│── App.tsx # Main application component
│── main.tsx # Main React entry point
│── index.css # Global styles

Each component has its own associated style file in the same folder.

## Technologies Used

- **React**: To build the user interface.
- **TypeScript**: For safer and more robust code.
- **CSS Modules**: For modularized styles.
- **Tailwind CSS**: For quick and custom design and styles.
- **Framer Motion**: For smooth and dynamic animations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sofiacostamagna/rent-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rent-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application in development mode:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser to view the application.

## Functionality

- **Hero Section**: Presents a header and a call-to-action button to discover more properties.
- **Features Section**: Shows the key features of the property search service.
- **Testimonials Section**: Displays user comments fetched from an API.
- **Pricing Section**: Presents the prices for subscription plans.
- **Contact Form**: A simple form for inquiries or contact.
- **Footer**: Links to social media and company details.

## Contribute

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -am 'Add new functionality'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/new-feature
   ```

5. Open a Pull Request.

Thank you for contributing to Rent! If you have any questions or suggestions, feel free to open an issue or send a PR. 🙌
