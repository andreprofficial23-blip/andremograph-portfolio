export type Testimonial = { quote: string; name: string; context: string };

// Only publish real testimonials approved by the person quoted.
export const testimonials: Testimonial[] = [];
