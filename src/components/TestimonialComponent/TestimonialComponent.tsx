"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

type TestimonialItem = {
  name: string;
  role: string;
  content: string;
  avatarSrc: string;
};

type TestimonialProps = {
  testimonial: TestimonialItem;
};

const TestimonialComponent: React.FC<TestimonialProps> = ({
  testimonial: { name, role, content, avatarSrc },
}) => (
  <Card className="w-full bg-neutral-800 text-neutral-100 shadow-lg relative overflow-hidden border border-neutral-700">
    <CardContent className="p-6">
      <div className="absolute top-4 right-4 text-neutral-700">
        <Quote size={24} />
      </div>
      <div className="flex items-start space-x-4">
        <Avatar className="h-12 w-12 border-2 border-neutral-700">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback className="bg-neutral-700 text-neutral-100">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-semibold text-neutral-100">{name}</h3>
          <p className="text-sm text-neutral-400">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-neutral-300 relative z-10">{content}</p>
    </CardContent>
  </Card>
);

export default TestimonialComponent;
