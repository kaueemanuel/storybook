import React from "react"

import * as Modules from "swiper/modules"
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react"

import { CircularProgress } from "../../components/Loadings/CircularProgress/CircularProgress"
import { Container } from "./Carousel.styles"

export interface CarouselProps extends SwiperProps {
  slides: Array<React.ReactNode | string>
  effect?: "default" | "fade" | "cube" | "coverflow"
  loading?: boolean
  "data-testid"?: string
}

export const Carousel: React.FC<CarouselProps> = ({
  slides = [],
  loading = false,
  "data-testid": dataTestid = "carousel",
  ...props
}) => {
  return (
    <Container loading={loading} data-testid={dataTestid}>
      <div className="loading">
        <CircularProgress color="primary" />
      </div>
      {!loading && slides.length > 0 && (
        <Swiper
          {...props}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          modules={Object.keys(Modules).map((key: any) => Modules[key])}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`Slide ${index + 1}`} virtualIndex={index}>
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Container>
  )
}
