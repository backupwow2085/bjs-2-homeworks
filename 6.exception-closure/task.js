function parseCount(value) {
  const parseValue = Number.parseFloat(value);
  if (Number.isNaN(parseValue)) {
    throw new Error("Невалидное значение");
  }
  return parseValue;
}

function validateCount(value) {
  try {
    return parseCount(value)
  } catch (error) {
    return error
  }
}


class Triangle {
  constructor(a, b, c) {
    this.b = b;
    this.a = a;
    this.c = c;
    if ((this.a + this.b) <= this.c) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else if ((this.b + this.c) <= this.a) {
      throw new Error("Треугольник с такими сторонами не существует");
    } else if ((this.a + this.c) <= this.b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c
  }
  get area() {
    const p = this.perimeter / 2
    const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    return Number(result.toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    }
  }
}
﻿
