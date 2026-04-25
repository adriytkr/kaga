from manim import *
import numpy as np

class GramSchmidt3DAssets(ThreeDScene):
  # ---------------- Theme ----------------
  BG_COLOR=ManimColor('#1a1b26')
  PLANE_COLOR=BLUE_E
  SECOND_PLANE_COLOR=GREEN_E
  VECTOR_COLOR=WHITE

  # ---------------- Original Basis ----------------
  v1=np.array([3,1,0])
  v2=np.array([1,3,0])
  v3=np.array([1,1,3])

  def play(
    self,
    *args,
    **kwargs
  ):
    if 'run_time' not in kwargs:
      kwargs['run_time']=0.6

    super().play(*args,**kwargs)

  def build_xy_plane(self):
    return NumberPlane(
      x_range=[-6,6,1],
      y_range=[-6,6,1],
      background_line_style={
        'stroke_opacity':0.3,
        'stroke_color':self.PLANE_COLOR
      }
    )

  def build_xz_plane(self):
    plane=self.build_xy_plane()
    plane.rotate(
      PI/2,
      axis=RIGHT
    )

    return plane

  def build_dashed_line(
    self,
    start,
    end,
    color:ManimColor
  )->DashedLine:
    return DashedLine(
      start=start,
      end=end,
      color=color,
      dash_length=0.15,
      dashed_ratio=0.5
    )

  def compute_proj(self,from_,to):
    return (np.dot(from_,to)/np.dot(to,to))*to

  def build_vector(
    self,
    start,
    end,
    color
  )->Arrow3D:
    return Arrow3D(
      start=start,
      end=end,
      color=color,
      thickness=0.02
    )

  def vector(
    self,
    vector,
    color:ManimColor,
    start=ORIGIN
  )->tuple[Transform,Arrow3D]:
    start_point=self.build_vector(
      start=start,
      end=start,
      color=color
    )
    full=self.build_vector(
      start=start,
      end=start+vector,
      color=color
    )

    self.add(start_point)

    return Transform(start_point,full),start_point
