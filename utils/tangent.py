from typing import Callable
from manim import Line
import numpy as np

ScalarFunc=Callable[[float], float]

def make_line_from_point_direction(
  p,
  x:float,
  f:ScalarFunc,
  direction,
  length:float
)->Line:
  dir_unit=direction/np.linalg.norm(direction)

  return Line(
    start=p-dir_unit*length,
    end=p+dir_unit*length
  )

def make_tangent_line(
  c2p,
  x:float,
  f:ScalarFunc,
  derivative:ScalarFunc,
  length:float
)->Line:
  p1=c2p(x,f(x))
  p2=c2p(x+0.01,f(x)+derivative(x)*0.01)
  dir=p2-p1

  return make_line_from_point_direction(p1,x,f,dir,length)
