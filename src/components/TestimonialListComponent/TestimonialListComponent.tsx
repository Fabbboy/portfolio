"use client";
import SectionStartComponent from "../SectionStartComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TestimonialComponent from "../TestimonialComponent";
import { TestimonialItem } from "../TestimonialComponent/types";

const TestimonialListComponent = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [host, setHost] = useState<string>("");

  useEffect(() => {
    setHost(window.location.href);
  }, []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      if (!host) return;
      try {
        const response = await axios.get<TestimonialItem[]>(
          `${host}data/testimonials.json`
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTestimonials();
  }, [host]);

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionStartComponent
        title="Testimonials"
        description="Here you can find some testimonials from people I have worked with."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialComponent key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialListComponent;
