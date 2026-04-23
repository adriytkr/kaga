from manim import *

from src.scenes.eigenvectors.eigenvectors_scene_assets import EigenvectorsSceneAssets

class EigenvectorsScene(EigenvectorsSceneAssets):
  def construct(self):
    # ---------------- Config ----------------
    self.camera.background_color=self.BG_COLOR



    # ---------------- Start Buff ----------------
    self.wait(1)



    # ---------------- Begin ----------------
    self.play(FadeIn(self.coords))



    # ---------------- Eigenvector 1 ----------------
    el_eigen_v1=self.build_vec(self.eigen_v1)
    self.play(GrowArrow(el_eigen_v1))

    el_v1_span=self.build_span(self.eigen_v1)
    self.play(FadeIn(el_v1_span))
    self.play(self.mv(self.matrix,el_eigen_v1))
    self.play(FadeOut(el_eigen_v1))

    family=[
      Arrow(
        start=ORIGIN,
        end=self.coords.c2p(self.eigen_v1*i),
        buff=0,
        color=self.VECTOR_COLOR
      )
      for i in range(-4,4)
    ]

    self.play(
      GrowArrow(v)
      for v in family
    )
    self.play(self.mv(self.matrix,*family))
    self.remove(el_v1_span)
    self.play(FadeOut(*family))



    # ---------------- Eigenvector 2 ----------------
    el_eigen_v2=self.build_vec(self.eigen_v2)
    self.play(GrowArrow(el_eigen_v2))

    el_v2_span=self.build_span(self.eigen_v2)
    self.play(FadeIn(el_v2_span))
    self.play(*self.mv(self.matrix,el_eigen_v2))
    self.play(FadeOut(el_eigen_v2,el_v2_span))



    # ---------------- No eigenvectors ----------------
    no_eigen_family=[
      Arrow(
        start=ORIGIN,
        end=self.coords.c2p(*(4*np.array([np.cos(a),np.sin(a)]))),
        buff=0,
        color=self.VECTOR_COLOR
      )
      for a in [i*np.pi/4 for i in range(8)]
    ]

    self.play(
      GrowArrow(v)
      for v in no_eigen_family
    )
    self.play(*self.mv(self.rotation_matrix,*no_eigen_family))
    self.play(FadeOut(*no_eigen_family))



    # ---------------- End Buff ----------------
    self.wait(1)
