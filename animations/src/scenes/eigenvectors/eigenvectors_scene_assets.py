from manim import *
import numpy as np

class EigenvectorsSceneAssets(Scene):
  coords=NumberPlane(
    x_range=[-10,10],
    y_range=[-6,6]
  )

  matrix=np.array([
    [5,-6],
    [3,-4]
  ])

  rotation_matrix=np.array([
    [np.cos(np.radians(30)),-np.sin(np.radians(30))],
    [np.sin(np.radians(30)),np.cos(np.radians(30))]
  ])

  eigen_v1=np.array([2,1])
  eigen_v2=np.array([-1,-1])

  BG_COLOR=ManimColor('#1a1b26')
  VECTOR_COLOR=PURE_BLUE

  def play(
    self,
    *args,
    **kwargs
  ):
    if 'run_time' not in kwargs:
      kwargs['run_time']=0.6

    super().play(*args,**kwargs)

  def setup(self):
    pass

  def build_vec(self,vec)->Arrow:
    return Arrow(
      start=ORIGIN,
      end=self.coords.c2p(vec),
      buff=0,
      color=self.VECTOR_COLOR
    ).set_z_index(999)

  def build_span(self,vec)->DashedLine:
    u=vec/np.linalg.norm(vec)
    return DashedLine(
      start=self.coords.c2p(*(u*10)),
      end=self.coords.c2p(*(-u*10)),
      color=PURE_RED
    )

  def mv(
    self,
    matrix,
    *vectors
  ):
    animations=[]

    for el_v in vectors:
      new_v=matrix@el_v.get_end()[:2]
      el_new_v=Arrow(
        start=ORIGIN,
        end=np.append(new_v,0),
        buff=0,
        color=self.VECTOR_COLOR
      )

      animation=Transform(
        el_v,
        el_new_v
      )
      animations.append(animation)

    return animations
