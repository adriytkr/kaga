from manim import *
from manim_slides import Slide

class FirstPresentation(Slide):
  def construct(self):
    circle=Circle(radius=3,color=BLUE)
    self.play(Create(circle))
    self.next_slide()

    self.next_slide()
    square=Square()
    self.play(Create(square))
