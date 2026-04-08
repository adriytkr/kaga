from manim import *

from src.utils.theme import HIGHLIGHT_COLOR,NEUTRAL_COLOR
from src.docs.mean_value_theorem.video.Base import BaseScene

class MainScene(BaseScene):
  def construct(self):
    # self.next_section(skip_animations=True) ###################
    self.wait(0.5)

    ############ Part I ############
    self.play(FadeIn(self.axes))

    # Consider the following function which represents the position of a particle over time.
    s_graph=self.coords.axes.plot(lambda t:self.position(t))

    self.play(Create(s_graph))

    # Let’s look at the interval from a to b.
    point_A=self.coords.build_graph_dot(
      self.x_A,
      self.position,
      color=NEUTRAL_COLOR
    )
    proj_A,label_A=self.coords.build_graph_projection(
      self.x_A,
      self.position,
      'a'
    )

    point_B=self.coords.build_graph_dot(
      self.x_B,
      self.position,
      color=NEUTRAL_COLOR
    )
    proj_B,label_B=self.coords.build_graph_projection(
      self.x_B,
      self.position,
      'b'
    )

    self.play(
      Create(point_A),
      Create(point_B)
    )
    self.play(
      Create(proj_A),
      Create(proj_B)
    )
    self.play(
      Create(label_A),
      Create(label_B)
    )

    # The average velocity of the particle over this interval is the slope of the secant line.
    secant_line=self.s_build_secant_line()
    self.play(Create(secant_line))

    # And the velocity at any instant is given by the slope of the tangent line.
    t=ValueTracker(self.x_A)
    s_tangent_line=self.s_build_tangent_line(t.get_value())
    s_tangent_point=self.s_build_tangent_point(t.get_value())

    self.play(Create(s_tangent_point))
    self.play(Create(s_tangent_line))


    # As the particle moves, its velocity changes, and so does the slope of the tangent line.
    s_tangent_line_dynamic=always_redraw(
      lambda:self.s_build_tangent_line(t.get_value())
    )
    s_tangent_point_dynamic=always_redraw(
      lambda:self.s_build_tangent_point(t.get_value())
    )

    self.remove(
      s_tangent_line,
      s_tangent_point
    )
    self.add(
      s_tangent_line_dynamic,
      s_tangent_point_dynamic
    )

    self.play(
      t.animate.set_value(self.x_B),
      run_time=2.5
    )
    self.wait(0.5)

    # Interestingly enough, there is an instant when the instantaneous velocity equals the average velocity.
    self.play(
      t.animate.set_value(self.x_C),
      run_time=1
    )
    self.wait(0.5)

    # Visually, the tangent line and the secant line become parallel to each other.
    s_tangent_line=self.s_build_tangent_line(self.x_C)

    self.remove(s_tangent_line_dynamic)
    self.add(s_tangent_line)

    self.play(
      Blink(s_tangent_line,blinks=2),
      Blink(secant_line,blinks=2),
      run_time=0.6
    )

    self.wait(1)

    # self.next_section() ###################

    ############ Part II ############
    # Scene Transition
    s_tangent_point=self.s_build_tangent_point(t.get_value())
    self.add(s_tangent_point)
    self.remove(s_tangent_point_dynamic)

    self.play(
      FadeOut(
        secant_line,
        s_tangent_line,
        s_tangent_point
      )
    )

    self.wait(1)
    self.next_section() ###################

    # To understand why that happens, let’s use the following analogy.
    self.play(Create(secant_line))

    # Suppose the secant line represents a road and the yellow point represents a bird.
    t.set_value(self.x_A)
    bird=self.s_build_bird(t.get_value())

    self.play(FadeIn(bird))

    # The bird wants to travel to the other end of the road, but along the curve.
    self.play(Indicate(point_B))
    self.play(Indicate(s_graph))

    # As it travels to the other side, the bird maintains a certain height relative to the road.
    bird_dynamic=always_redraw(
      lambda:self.s_build_bird(t.get_value())
    )
    height_dynamic=always_redraw(
      lambda:self.s_build_height(t.get_value())
    )

    self.remove(bird)
    self.add(
      bird_dynamic,
      height_dynamic
    )

    self.play(
      t.animate.set_value(self.x_B),
      run_time=2
    )
    self.wait(0.5)

    # [RESET BIRD]
    self.play(t.animate.set_value(self.x_A))

    # Initially, as the bird begins its flight, it gains height.
    # However, at some point, the bird needs to descend to reach its destination, and its height relative to the road decreases.
    self.play(
      t.animate.set_value(self.x_B),
      run_time=7.5
    )
    self.wait(0.5)

    # Since the bird ascends and then descends, it must reach a maximum height— a point at which its vertical motion stops, and its height is neither increasing nor decreasing.
    self.play(t.animate.set_value(self.x_C))

    self.remove(
      bird_dynamic,
      height_dynamic
    )

    height=self.s_build_height(t.get_value())
    bird=self.s_build_bird(t.get_value())

    self.play(
      FadeOut(
        height,
        bird
      )
    )
    self.wait(0.5)

    # Now, to conclude this analogy, if we draw a vector to represent the velocity of the bird, we can finally understand why the Mean Value Theorem must be true.
    t.set_value(self.x_A)
    bird=self.s_build_bird(t.get_value())

    self.play(Create(bird))

    velocity=self.s_build_velocity(t.get_value())
    self.play(GrowArrow(velocity))
    self.wait(0.5)

    # Initially, the velocity is pointing away from the secant line because the bird is moving away from it.
    # However, we know that at some point the bird needs to descend. And at t that instant, its velocity begins to point towards the secant line.
    velocity_dynamic=always_redraw(
      lambda:self.s_build_velocity(t.get_value())
    )

    self.remove(
      bird,
      velocity
    )
    self.add(
      bird_dynamic,
      velocity_dynamic
    )

    self.play(
      t.animate.set_value(self.x_B),
      run_time=7.5
    )
    self.wait(0.5)

    # At the point where the bird is neither ascending nor descending, the point has reached the maximum possible height — the bird has to be moving “along” the road. In other words, the velocity is parallel to the secant line.
    self.play(t.animate.set_value(self.x_C))

    # We can simply replace the vector with the tangent line at that point. And now we clearly see why the Mean Value Theorem holds: the tangent line is parallel to the secant line.
    s_tangent_line=self.s_build_tangent_line(t.get_value())
    self.velocity=self.s_build_velocity(t.get_value())

    self.remove(velocity_dynamic)
    self.add(self.velocity)

    self.play(FadeOut(self.velocity))
    self.wait(0.5)
    self.play(Create(s_tangent_line))

    self.wait(0.5)
