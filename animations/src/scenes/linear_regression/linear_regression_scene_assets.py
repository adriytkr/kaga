from manim import *
import numpy as np

class LinearRegressionSceneAssets(Scene):
  BG_COLOR       = ManimColor('#1a1b26')
  POINT_COLOR    = ManimColor('#7AA2F7')
  MODEL_COLOR    = ManimColor('#E0AF68')
  RESIDUAL_COLOR = ManimColor("#E72E50")
  SQUARE_COLOR   = ManimColor('#73DACA')

  coords=NumberPlane(
    x_range=[-1,6,1],
    y_range=[-1,13,1],
    x_length=config.frame_width*(3/4),
    y_length=config.frame_height*(3/4),
    background_line_style={'stroke_opacity':0},
    axis_config={'stroke_color':WHITE}
  ).set_z_index(1)
  
  offset = [2.0, 1.5, -1.5, -2.0, 2.0]

  def y(self,x:float)->float:
    return 2*x+1

  def build_collinear_points(
    self,
    x0:float,
    dx:float,
    total:int
  )->list[any]:
    result=[]

    for i in range(total):
      x=x0+dx*i
      result.append(np.array([x,self.y(x)]))

    return result

  def setup(self):
    self.el_collinear_points=[
      Dot(
        self.coords.c2p(p),
        color=self.POINT_COLOR,
        radius=0.06
      ).set_z_index(5)
      for p in self.build_collinear_points(1,1,5)
    ]

  def build_line(
    self,
    slope:float,
    yIntercept:float
  )->Line:
    x_min=self.coords.x_range[0]
    x_max=self.coords.x_range[1]

    start=self.coords.c2p(
      x_min,
      slope*x_min+yIntercept
    )

    end=self.coords.c2p(
      x_max,
      slope*x_max+yIntercept
    )

    return Line(
      start=start,
      end=end,
      color=self.MODEL_COLOR,
      stroke_width=4
    ).set_z_index(4)

  def shift(
    self,
    points:list,
    offset:list
  ):
    animations=[]

    for idx, p in enumerate(points):
      dy=offset[idx]
      x,y=self.coords.p2c(p.get_center())
      new_pos=self.coords.c2p(x,y+dy)

      animations.append(p.animate.move_to(new_pos))

    return animations

  def build_residuals(
    self,
    points:list,
    slope:float,
    intercept:float
  )->list[Line]:
    residuals=[]

    for p in points:
      x, y=self.coords.p2c(p.get_center())
      y_hat=slope*x+intercept

      residuals.append(
        Line(
          start=self.coords.c2p(x,y),
          end=self.coords.c2p(x,y_hat),
          color=self.RESIDUAL_COLOR,
          stroke_width=2
        ).set_z_index(3)
      )

    return residuals

  def build_squares(
    self,
    points:list,
    slope:float,
    intercept:float
  )->list[Square]:
    squares=[]

    for p in points:
      x,y=self.coords.p2c(p.get_center())
      y_hat=slope*x+intercept

      p1=self.coords.c2p(x,y)
      p2=self.coords.c2p(x,y_hat)
      side=np.linalg.norm(p1-p2)

      mid_y=(y+y_hat)/2

      square=Square(
        side_length=side,
        color=self.SQUARE_COLOR,
        stroke_width=2,
        fill_opacity=0.3
      )
      square.move_to(self.coords.c2p(x,mid_y))
      square.set_z_index(2)

      squares.append(square)

    return squares

  def compute_best_fit(self,points):
    xs=[]
    ys=[]

    for p in points:
      x, y=self.coords.p2c(p.get_center())
      xs.append(x)
      ys.append(y)

    xs=np.array(xs)
    ys=np.array(ys)

    m,b=np.polyfit(xs,ys,1)
    return m,b
