"use client";

import SectionStartComponent from "../SectionStartComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TestimonialComponent from "../TestimonialComponent";
import { TestimonialItem } from "../TestimonialComponent/types";

export default function TestimonialListComponent() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get<TestimonialItem[]>(
          `data/testimonials.json`
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <SectionStartComponent
            title="Testimonials"
            description="Here you can find some testimonials from people I have worked with."
          />
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex justify-center"
              >
                <TestimonialComponent testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
