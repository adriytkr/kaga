from manim import *

from src.scenes.linear_regression.linear_regression_scene_assets import LinearRegressionSceneAssets

class LinearRegressionScene(LinearRegressionSceneAssets):
  def construct(self):
  # ---------------- Config ----------------
    self.camera.background_color=self.BG_COLOR



    # ---------------- Begin Buff ----------------
    self.wait(1)



    # ---------------- Begin ----------------
    self.play(FadeIn(self.coords))



    # ---------------- Collinear Scenario ----------------
    initial_slope=2
    initial_yIntercept=1
    slope_tracker=ValueTracker(initial_slope)
    yIntercept_tracker=ValueTracker(initial_yIntercept)

    self.play(FadeIn(*self.el_collinear_points))
    line=self.build_line(
      slope=slope_tracker.get_value(),
      yIntercept=yIntercept_tracker.get_value()
    )
    self.play(Create(line))
    self.remove(line)

    line=always_redraw(lambda:
      self.build_line(
        slope=slope_tracker.get_value(),
        yIntercept=yIntercept_tracker.get_value()
      )
    )
    self.add(line)



    # ---------------- Shift points ----------------
    self.play(
      *[
        anim.set_rate_func(smooth)
        for anim in self.shift(
          self.el_collinear_points,
          self.offset
        )
      ],
      lag_ratio=0.1
    )



    # ---------------- Residuals ----------------
    residuals=always_redraw(lambda:
      VGroup(*self.build_residuals(
        self.el_collinear_points,
        slope_tracker.get_value(),
        yIntercept_tracker.get_value()
      ))
    )

    squares=always_redraw(lambda:
      VGroup(*self.build_squares(
        self.el_collinear_points,
        slope_tracker.get_value(),
        yIntercept_tracker.get_value()
      ))
    )

    self.play(
      FadeIn(squares),
      FadeIn(residuals)
    )



    # ---------------- Play ----------------
    self.play(
      slope_tracker.animate.set_value(-1),
      yIntercept_tracker.animate.set_value(5),
    )

    self.play(
      slope_tracker.animate.set_value(initial_slope),
      yIntercept_tracker.animate.set_value(initial_yIntercept),
    )

    self.play(
      slope_tracker.animate.set_value(3),
      yIntercept_tracker.animate.set_value(-2),
    )

    self.play(
      slope_tracker.animate.set_value(initial_slope),
      yIntercept_tracker.animate.set_value(initial_yIntercept),
    )

    self.play(
      slope_tracker.animate.set_value(0.5),
      yIntercept_tracker.animate.set_value(4),
      run_time=2
    )

    # ---------------- Best Line ----------------
    m,b=self.compute_best_fit(self.el_collinear_points)

    self.play(
      slope_tracker.animate.set_value(m),
      yIntercept_tracker.animate.set_value(b),
      run_time=2
    )



    # ---------------- End Buff ----------------
    self.wait(1)
