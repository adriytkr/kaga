from manim import *

from src.utils.custom_types import scalarFunc,coordinates

import numpy as np

class CoordinateSystemManager:
  def __init__(self,axes:Axes):
    self.axes=axes

  def to_point(
    self,
    x:float,
    y:float
  )->coordinates:
    return self.axes.c2p(x,y)

  def to_graph_point(
    self,
    x:float,
    f:scalarFunc
  )->coordinates:
    return self.axes.c2p(x,f(x))
  
  def build_dot(
    self,
    x:float,
    y:float,
    color=WHITE
  )->Dot:
    dot=Dot(self.to_point(x,y),color=color)
    dot.set_z_index(5)
    return dot

  def build_graph_dot(
    self,
    x:float,
    f:scalarFunc,
    color=WHITE
  )->Dot:
    dot=Dot(self.to_graph_point(x,f),color=color)
    dot.set_z_index(5)
    return dot

  def build_projection(
    self,
    x:float,
    y:float,
    label:str
  )->tuple[DashedLine,MathTex]:
    projection=DashedLine(
      self.to_point(x,y),
      self.to_point(x,0)
    )

    label=MathTex(label)
    label.next_to(projection,DOWN)
    label.set_z_index(5)

    return projection,label

  def build_graph_projection(
    self,
    x:float,
    f:scalarFunc,
    label:str
  )->tuple[DashedLine,MathTex]:
    projection=DashedLine(
      self.to_graph_point(x,f),
      self.to_point(x,0)
    )

    label=MathTex(label)
    label.next_to(projection,DOWN)
    label.set_z_index(5)

    return projection,label
