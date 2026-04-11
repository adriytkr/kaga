from manim import *

from src.utils.theme import HIGHLIGHT_COLOR

class FirstVideo(Scene):
  def construct(self):
    square=Square(color=HIGHLIGHT_COLOR)

    self.add(square)
