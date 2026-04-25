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



    # ---------------- Begin Buff ----------------
    self.wait(1)



    # ---------------- Begin ----------------
    xy_plane=self.build_xy_plane()
    xz_plane=self.build_xz_plane()

    self.play(
      Create(xy_plane),
      Create(xz_plane)
    )



    # ---------------- Original Basis ----------------
    anim_v1_grow,el_v1=self.vector(
      vector=self.v1,
      color=self.VECTOR_COLOR
    )

    anim_v2_grow,el_v2=self.vector(
      vector=self.v2,
      color=self.VECTOR_COLOR
    )

    anim_v3_grow,el_v3=self.vector(
      vector=self.v3,
      color=self.VECTOR_COLOR
    )

    self.play(
      anim_v1_grow,
      anim_v2_grow,
      anim_v3_grow
    )



    # ---------------- Gram Schmidt on xy-plane ----------------
    self.play(
      FadeOut(
        xz_plane,
        el_v3
      )
    )

    # ---------------- Span of v1 ----------------
    v1_dir=self.v1/np.linalg.norm(self.v1)
    span_line=self.build_dashed_line(
      start=v1_dir*-6,
      end=v1_dir*6,
      color=YELLOW
    )

    self.play(Create(span_line))

    # ---------------- Projection of v2 onto v1 ----------------
    proj_vec=self.compute_proj(self.v2,self.v1)
    orth_vec=self.v2-proj_vec

    dashed=self.build_dashed_line(
      start=self.v2,
      end=proj_vec,
      color=self.VECTOR_COLOR
    )

    self.play(Create(dashed))

    anim,proj_arrow=self.vector(
      vector=proj_vec,
      color=YELLOW
    )

    self.play(anim)

    # ---------------- Orthogonal Component of v2 ----------------
    anim,orth_arrow=self.vector(
      vector=orth_vec,
      color=RED,
      start=proj_vec
    )

    self.play(anim)

    orth_at_origin=self.build_vector(
      start=ORIGIN,
      end=orth_vec,
      color=RED
    )

    self.play(
      Transform(
        orth_arrow,
        orth_at_origin
      ),
      FadeOut(
        el_v2,dashed,
        span_line,
        proj_arrow
      )
    )



    # ---------------- Gram Schmidt Finale ----------------
    self.play(
      FadeIn(
        xz_plane,
        el_v3
      ),
    )

    # ---------------- Spans of the two plane vectors ----------------
    orth_dir=orth_vec/np.linalg.norm(orth_vec)

    span_v1=self.build_dashed_line(
      start=v1_dir*-6,
      end=v1_dir*6,
      color=YELLOW
    )

    span_orth=self.build_dashed_line(
      start=orth_dir*-6,
      end=orth_dir*6,
      color=RED
    )

    self.play(
      Create(span_v1),
      Create(span_orth)
    )

    # ---------------- Dashed lines from v3 tip onto each span ----------------
    proj_v3_v1=self.compute_proj(
      from_=self.v3,
      to=self.v1
    )
    proj_v3_orth=self.compute_proj(
      from_=self.v3,
      to=orth_vec
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
    anim_v1_grow,proj_v3_v1_arrow=self.vector(
      vector=proj_v3_v1,
      color=YELLOW
    )
    anim_v2_grow,proj_v3_orth_arrow=self.vector(
      vector=proj_v3_orth,
      color=RED
    )

    self.play(
      anim_v1_grow,
      anim_v2_grow
    )

    # ---------------- Slide proj_orth to tip of proj_v1 ----------------
    shifted_full=self.build_vector(
      start=proj_v3_v1,
      end=proj_v3_v1+proj_v3_orth,
      color=RED
    )

    self.play(
      Transform(
        proj_v3_orth_arrow,
        shifted_full
      )
    )

    # ---------------- Resultant vector ----------------
    resultant_vec=proj_v3_v1+proj_v3_orth
    anim,resultant_arrow=self.vector(
      vector=resultant_vec,
      color=PURPLE
    )

    self.play(anim)

    # ---------------- Orthogonal vector at v3 tip ----------------
    orth3_vec=self.v3-resultant_vec
    anim,orth3_arrow=self.vector(
      vector=orth3_vec,
      color=GREEN,
      start=resultant_vec
    )

    self.play(anim)

    # ---------------- Move to origin, fade everything ----------------
    orth3_at_origin=self.build_vector(
      start=ORIGIN,
      end=orth3_vec,
      color=GREEN,
    )

    self.play(
      Transform(orth3_arrow,orth3_at_origin),
      FadeOut(
        span_v1,span_orth,
        proj_v3_v1_arrow,proj_v3_orth_arrow,
        dashed_v3_v1,dashed_v3_orth,
        resultant_arrow,el_v3
      )
    )



    # ---------------- End Buff ----------------
    self.wait(1)
