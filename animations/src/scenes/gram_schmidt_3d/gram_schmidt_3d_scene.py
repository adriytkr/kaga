from manim import *
from src.scenes.gram_schmidt_3d.gram_schmidt_3d_scene_assets import GramSchmidt3DAssets
class GramSchmidt3DScene(GramSchmidt3DAssets):
  def construct(self):
    # ---------------- Config ----------------
    self.camera.background_color=self.BG_COLOR
    self.set_camera_orientation(
      phi=70*DEGREES,
      theta=45*DEGREES
    )


    # ---------------- Begin ----------------
    xy_plane=self.build_xy_plane()
    xz_plane=self.build_xz_plane()

    self.play(
      Create(xy_plane),
      Create(xz_plane)
    )



    # ---------------- Original Basis ----------------
    v1_point=self.build_point_arrow(self.VECTOR_COLOR)
    v1_full=self.build_arrow(self.v1,self.VECTOR_COLOR)

    v2_point=self.build_point_arrow(self.VECTOR_COLOR)
    v2_full=self.build_arrow(self.v2,self.VECTOR_COLOR)

    v3_point=self.build_point_arrow(self.VECTOR_COLOR)
    v3_full=self.build_arrow(self.v3,self.VECTOR_COLOR)

    self.add(
      v1_point,
      v2_point,
      v3_point
    )

    self.play(
      Transform(v1_point,v1_full),
      Transform(v2_point,v2_full),
      Transform(v3_point,v3_full)
    )



    # ---------------- Gram Schmidt on xy-plane ----------------
    self.play(
      FadeOut(
        xz_plane,
        v3_point
      ),
    )

    # ---------------- Span of v1 ----------------
    v1_dir=self.v1/np.linalg.norm(self.v1)
    span_line=self.build_dashed_line(
      start=v1_dir*-6,
      end=v1_dir*6,
      color=YELLOW
    )

    self.play(Create(span_line))

    # ---------------- Projection math ----------------
    proj_vec=self.compute_proj(
      self.v2,
      self.v1
    )
    orth_vec=self.v2-proj_vec

    dashed=self.build_dashed_line(
      start=self.v2,
      end=proj_vec,
      color=self.VECTOR_COLOR
    )

    self.play(Create(dashed))

    # ---------------- Projection arrow ----------------
    proj_point=self.build_point_arrow(YELLOW)
    proj_full=self.build_arrow(
      vec=proj_vec,
      color=YELLOW
    )

    self.add(proj_point)
    self.play(
      Transform(
        proj_point,
        proj_full
      )
    )

    # ---------------- Orthogonal arrow at proj tip ----------------
    orth_point=Arrow3D(
      start=proj_vec,
      end=proj_vec,
      color=RED,
      thickness=0.02
    )

    orth_at_proj=Arrow3D(
      start=proj_vec,
      end=proj_vec+orth_vec,
      color=RED,
      thickness=0.02
   )

    self.add(orth_point)
    self.play(
      Transform(
        orth_point,
        orth_at_proj
      )
    )

    # ---------------- Move orth to origin, fade v2 ----------------
    orth_at_origin=self.build_arrow(
      vec=orth_vec,
      color=RED
    )

    self.play(
      Transform(orth_point,orth_at_origin),
      FadeOut(
        v2_point,
        dashed,
        span_line,
        proj_point,
        proj_full
      ),
    )



    # ---------------- Gram Schmidt Finale ----------------
    self.play(
      FadeIn(xz_plane),
      FadeIn(v3_point)
    )

    # ---------------- Spans of the two plane vectors ----------------
    orth_dir=orth_vec/np.linalg.norm(orth_vec)
    span_v1=self.build_dashed_line(
      start=v1_dir*-6,
      end=v1_dir*6,
      color=YELLOW
    )

    span_orth=self.build_dashed_line(
      orth_dir*-6,
      orth_dir*6,RED
    )

    self.play(
      Create(span_v1),
      Create(span_orth)
    )

    # ---------------- Dashed lines from v3 tip onto each span ----------------
    proj_v3_v1=self.compute_proj(
      self.v3,
      self.v1
    )

    proj_v3_orth=self.compute_proj(
      self.v3,
      orth_vec
    )

    dashed_v3_v1=self.build_dashed_line(
      start=self.v3,
      end=proj_v3_v1,
      color=self.VECTOR_COLOR
    )

    dashed_v3_orth=self.build_dashed_line(
      start=self.v3,
      end=proj_v3_orth,
      color=self.VECTOR_COLOR
    )

    self.play(
      Create(dashed_v3_v1),
      Create(dashed_v3_orth)
    )

    # ---------------- Grow the two projections ----------------
    proj_v3_v1_point=Arrow3D(
      start=ORIGIN,
      end=ORIGIN,
      color=YELLOW,
      thickness=0.02
    )
    proj_v3_v1_full=self.build_arrow(
      vec=proj_v3_v1,
      color=YELLOW
    )

    proj_v3_orth_point=Arrow3D(
      start=ORIGIN,
      end=ORIGIN,
      color=RED,
      thickness=0.02
    )
    proj_v3_orth_full=self.build_arrow(
      vec=proj_v3_orth,
      color=RED
    )

    self.add(
      proj_v3_v1_point,
      proj_v3_orth_point
    )
    self.play(
      Transform(
        proj_v3_v1_point,
        proj_v3_v1_full
      ),
      Transform(
        proj_v3_orth_point,
        proj_v3_orth_full
      )
    )

    # ---------------- Slide proj_orth to tip of proj_v1 ----------------
    shifted_full=Arrow3D(
      start=proj_v3_v1,
      end=proj_v3_v1+proj_v3_orth,
      color=RED,
      thickness=0.02
    )

    self.play(
      Transform(
        proj_v3_orth_point,
        shifted_full
      )
    )

    # ---------------- Resultant vector ----------------
    resultant_vec=proj_v3_v1+proj_v3_orth
    resultant_point=Arrow3D(
      start=ORIGIN,
      end=ORIGIN,
      color=PURPLE,
      thickness=0.02
    )

    resultant_full=self.build_arrow(
      vec=resultant_vec,
      color=PURPLE
    )

    self.add(resultant_point)
    self.play(
      Transform(
        resultant_point,
        resultant_full
      )
    )

    # ---------------- Orthogonal vector at v3 tip ----------------
    orth3_vec=self.v3-resultant_vec
    orth3_at_tip_point=Arrow3D(
      start=resultant_vec,
      end=resultant_vec,
      color=GREEN,
      thickness=0.02
    )

    orth3_at_tip_full=Arrow3D(
      start=resultant_vec,
      end=resultant_vec+orth3_vec,
      color=GREEN,
      thickness=0.02
    )

    self.add(orth3_at_tip_point)
    self.play(
      Transform(
        orth3_at_tip_point,
        orth3_at_tip_full
      )
    )

    # ---------------- Fade out spans, projections, shifted ----------------
    orth3_at_origin=self.build_arrow(
      vec=orth3_vec,
      color=GREEN
    )

    self.play(
      FadeOut(
        span_v1,
        span_orth,
        proj_v3_v1_point,
        proj_v3_orth_point,
        dashed_v3_v1,
        dashed_v3_orth,
        resultant_point,
        v3_point,
      ),
      Transform(orth3_at_tip_point,orth3_at_origin),
    )

    self.wait(1)