import React, { useEffect, useState } from "react";
import { User, LockKeyhole } from "lucide-react";

const LoginPage = ({ onLoginSuccess }) => {
  const [namaSiswa, setNamaSiswa] = useState("");

  // =====================================================
  // LOGIN
  // =====================================================

  const handleLogin = () => {
    const nama = namaSiswa.trim();

    if (!nama) return;

    localStorage.setItem("geospace_user", nama);

    if (onLoginSuccess) {
      onLoginSuccess(nama);
    }
  };

  // =====================================================
  // AMBIL USER YANG SEBELUMNYA LOGIN
  // =====================================================

  useEffect(() => {
    const savedUser = localStorage.getItem("geospace_user");

    if (savedUser && onLoginSuccess) {
      onLoginSuccess(savedUser);
    }
  }, [onLoginSuccess]);

  // =====================================================
  // FORMAT NAMA
  // =====================================================

  const handleNameChange = (e) => {
    const value = e.target.value
      .replace(/\s+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    setNamaSiswa(value);
  };

  return (
    <>
      {/* =====================================================
          MAIN CANVAS
      ====================================================== */}

      <main
        className="
          relative
          min-h-screen
          w-full
          overflow-hidden
          bg-gradient-to-br
          from-[#dff8f8]
          via-[#f4fbfa]
          to-[#fff0e5]
        "
      >
        {/* =====================================================
            GLOBAL BACKGROUND DECORATION
        ====================================================== */}

        {/* Soft cyan glow kiri atas */}
        <div
          className="
            pointer-events-none
            absolute
            -left-[180px]
            -top-[180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#bceeee]
            opacity-70
            blur-[1px]
          "
        />

        {/* Soft cyan glow kiri bawah */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-[220px]
            -left-[160px]
            h-[480px]
            w-[480px]
            rounded-full
            bg-[#c9f2f2]
            opacity-65
          "
        />

        {/* Soft peach glow kanan atas */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[180px]
            -top-[180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#fff0e5]
            opacity-80
          "
        />

        {/* Soft peach glow kanan bawah */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-[220px]
            -right-[160px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#ffe5d7]
            opacity-75
          "
        />

        {/* =====================================================
            CONTENT WRAPPER
        ====================================================== */}

        <div
          className="
            relative
            z-10
            grid
            min-h-screen
            w-full
            lg:grid-cols-2
          "
        >
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <section
            className="
              relative
              flex
              min-h-[560px]
              items-center
              justify-center
              overflow-hidden
              bg-transparent
              px-6
              py-16
              lg:min-h-screen
              lg:px-10
              lg:py-10
            "
          >
            {/* -----------------------------------------------------
                Decorative dots - top left
            ------------------------------------------------------ */}

            <div
              className="
                absolute
                left-7
                top-9
                grid
                grid-cols-5
                gap-[7px]
                opacity-80
              "
            >
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-white
                  "
                />
              ))}
            </div>

            {/* -----------------------------------------------------
                Decorative dots - bottom left
            ------------------------------------------------------ */}

            <div
              className="
                absolute
                bottom-12
                left-7
                grid
                grid-cols-5
                gap-[7px]
                opacity-60
              "
            >
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-[#63d1d2]
                  "
                />
              ))}
            </div>

            {/* -----------------------------------------------------
                Decorative symbols
            ------------------------------------------------------ */}

            {/* Plus top */}
            <span
              className="
                absolute
                left-[190px]
                top-[68px]
                text-[24px]
                font-light
                text-[#12bfc0]
              "
            >
              +
            </span>

            {/* Circle top */}
            <span
              className="
                absolute
                right-[58px]
                top-[78px]
                text-[22px]
                font-light
                text-[#12bfc0]
              "
            >
              ○
            </span>

            {/* Orange circle */}
            <span
              className="
                absolute
                right-[100px]
                top-[132px]
                text-[14px]
                text-[#ff8067]
              "
            >
              ○
            </span>

            {/* Plus bottom */}
            <span
              className="
                absolute
                bottom-[135px]
                left-[35px]
                text-[24px]
                font-light
                text-[#12bfc0]
              "
            >
              +
            </span>

            {/* Orange dot */}
            <span
              className="
                absolute
                bottom-[105px]
                left-[35px]
                text-[15px]
                text-[#ff8067]
              "
            >
              °
            </span>

            {/* Triangle */}
            <span
              className="
                absolute
                bottom-[155px]
                right-[65px]
                text-[27px]
                font-light
                text-[#28c6c7]
              "
            >
              △
            </span>

            {/* -----------------------------------------------------
                Small floating cube
            ------------------------------------------------------ */}

            <div
              className="
                absolute
                bottom-[165px]
                left-[48px]
              "
            >
              <div
                className="
                  h-[20px]
                  w-[20px]
                  rotate-45
                  rounded-[3px]
                  border-2
                  border-[#28c7c8]
                "
              />
            </div>

            {/* =====================================================
                MAIN ILLUSTRATION
            ====================================================== */}

            <div
              className="
                relative
                z-10
                flex
                -translate-y-2
                flex-col
                items-center
                justify-center
              "
            >
              {/* -------------------------------------------------
                  Orbit
              -------------------------------------------------- */}

              <div
                className="
                  absolute
                  left-2/2
                  top-[72px]
                  h-[102px]
                  w-[255px]
                  -translate-x-1/2
                  rotate-[12deg]
                  rounded-[50%]
                  border
                  border-dashed
                  border-[#27c7c8]
                  opacity-90
                "
              />

              {/* Orbit dot */}
              <div
                className="
                  absolute
                  right-[35px]
                  top-[55px]
                  h-[9px]
                  w-[9px]
                  rounded-full
                  border-2
                  border-[#ff8067]
                  bg-white
                "
              />

              {/* -------------------------------------------------
                  3D CUBE
              -------------------------------------------------- */}

              <div className="cube-scene">
                <div className="cube">
                  {/* Front */}
                  <div className="cube-face cube-front" />

                  {/* Right */}
                  <div className="cube-face cube-right" />

                  {/* Top */}
                  <div className="cube-face cube-top" />
                </div>
              </div>

              {/* Cube shadow */}
              <div className="cube-shadow" />

              {/* -------------------------------------------------
                  Illustration text
              -------------------------------------------------- */}

              <div className="mt-8 text-center">
                <h2
                  className="
                    text-[18px]
                    font-bold
                    tracking-[-0.3px]
                    text-[#14263d]
                  "
                >
                  Eksplorasi Bangun Ruang
                </h2>

                <p
                  className="
                    mt-1.5
                    text-[13px]
                    leading-[20px]
                    text-[#718096]
                  "
                >
                  Belajar kubus, balok, dan lainnya
                  <br />
                  secara interaktif 🚀
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}

          <section
            className="
              relative
              flex
              min-h-[600px]
              items-center
              justify-center
              overflow-hidden
              bg-transparent
              px-6
              py-12
              lg:min-h-screen
              lg:px-10
              lg:py-10
            "
          >
            {/* -----------------------------------------------------
                Subtle decoration behind card
            ------------------------------------------------------ */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[100px]
                -right-[100px]
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#ffe1d3]
                opacity-60
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-[30px]
                top-[80px]
                h-[90px]
                w-[90px]
                rounded-full
                bg-white
                opacity-40
              "
            />

            {/* =====================================================
                LOGIN CARD
            ====================================================== */}

            <div
              className="
                relative
                z-20
                w-full
                max-w-[420px]
              "
            >
              <div
                className="
                  rounded-[16px]
                  bg-white
                  px-8
                  py-9
                  shadow-[0_10px_35px_rgba(30,50,70,0.13)]
                  md:px-9
                  md:py-10
                "
              >
                {/* -------------------------------------------------
                    Header
                -------------------------------------------------- */}

                <div className="mb-8 text-center">
                  <h1
                    className="
                      text-[42px]
                      font-bold
                      leading-none
                      tracking-[-1.5px]
                      text-[#10243b]
                    "
                  >
                    Geospace
                  </h1>

                  <p
                    className="
                      mt-4
                      text-[13px]
                      text-[#718096]
                    "
                  >
                    Selamat datang di Geospace
                  </p>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      text-[#718096]
                    "
                  >
                    Jelajahi dunia bangun ruang secara interaktif!
                  </p>
                </div>

                {/* -------------------------------------------------
                    Greeting
                -------------------------------------------------- */}

                <div className="mb-5">
                  <h2
                    className="
                      text-[15px]
                      font-bold
                      text-[#26364b]
                    "
                  >
                    Halo! Siapa namamu? 👋
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[12px]
                      leading-[18px]
                      text-[#8a96a5]
                    "
                  >
                    Masukkan nama untuk memulai petualangan belajar
                  </p>
                </div>

                {/* -------------------------------------------------
                    Input
                -------------------------------------------------- */}

                <div className="relative mb-3.5">
                  <User
                    size={18}
                    strokeWidth={2}
                    className="
                      absolute
                      left-3.5
                      top-1/2
                      -translate-y-1/2
                      text-[#21bfc0]
                    "
                  />

                  <input
                    type="text"
                    value={namaSiswa}
                    placeholder="Contoh: Budi"
                    onChange={handleNameChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleLogin();
                      }
                    }}
                    autoComplete="name"
                    className="
                      h-[48px]
                      w-full
                      rounded-[8px]
                      border
                      border-[#51cccc]
                      bg-white
                      pl-11
                      pr-4
                      text-[13px]
                      text-[#26364b]
                      outline-none
                      transition
                      placeholder:text-[#9aa5b1]
                      focus:border-[#21bfc0]
                      focus:ring-2
                      focus:ring-[#b5eeee]
                    "
                  />
                </div>

                {/* -------------------------------------------------
                    Login Button
                -------------------------------------------------- */}

                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={!namaSiswa.trim()}
                  className="
                    h-[42px]
                    w-full
                    rounded-[8px]
                    bg-gradient-to-r
                    from-[#ff735a]
                    to-[#ff8065]
                    text-[13px]
                    font-semibold
                    text-white
                    shadow-[0_5px_12px_rgba(255,112,86,0.20)]
                    transition
                    hover:from-[#ff654b]
                    hover:to-[#ff7358]
                    active:scale-[0.99]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  Masuk 🚀
                </button>

                {/* -------------------------------------------------
                    Footer
                -------------------------------------------------- */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-1.5
                  "
                >
                  <LockKeyhole
                    size={13}
                    strokeWidth={2}
                    className="shrink-0 text-[#9ba6b2]"
                  />

                  <p
                    className="
                      text-[11px]
                      leading-[16px]
                      text-[#9ba6b2]
                    "
                  >
                    Nama akan digunakan untuk menyimpan progres belajar
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* =====================================================
          3D CUBE CSS
      ====================================================== */}

      <style>{`

        /* =========================================
           CUBE SCENE
        ========================================== */

        .cube-scene {
          position: relative;

          width: 165px;
          height: 165px;

          display: flex;
          align-items: center;
          justify-content: center;

          perspective: 750px;
        }

        /* =========================================
           CUBE
        ========================================== */

        .cube {
          position: relative;

          width: 112px;
          height: 112px;

          transform-style: preserve-3d;

          transform:
            rotateX(-8deg)
            rotateY(-30deg)
            rotateZ(-1deg);

          animation:
            cubeFloat 4s ease-in-out infinite;
        }

        /* =========================================
           CUBE FACES
        ========================================== */

        .cube-face {
          position: absolute;

          width: 112px;
          height: 112px;

          box-sizing: border-box;

          border:
            3px solid
            rgba(255, 255, 255, 0.92);

          backface-visibility: hidden;
        }

        /* =========================================
           FRONT
        ========================================== */

        .cube-front {
          background:
            linear-gradient(
              135deg,
              #12babc 0%,
              #079b9e 100%
            );

          transform:
            translateZ(55px);

          border-radius: 2px;
        }

        /* =========================================
           RIGHT
        ========================================== */

        .cube-right {
          background:
            linear-gradient(
              135deg,
              #078f94 0%,
              #057b81 100%
            );

          transform:
            rotateY(90deg)
            translateZ(55px);

          border-radius: 2px;
        }

        /* =========================================
           TOP
        ========================================== */

        .cube-top {
          background:
            linear-gradient(
              135deg,
              #42d2d3 0%,
              #22babc 100%
            );

          transform:
            rotateX(90deg)
            translateZ(55px);

          border-radius: 2px;
        }

        /* =========================================
           CUBE SHADOW
        ========================================== */

        .cube-shadow {
          width: 108px;
          height: 20px;

          margin-top: -3px;

          border-radius: 50%;

          background:
            rgba(15, 160, 164, 0.23);

          filter: blur(9px);

          animation:
            shadowFloat 4s ease-in-out infinite;
        }

        /* =========================================
           CUBE FLOAT
        ========================================== */

        @keyframes cubeFloat {

          0%,
          100% {
            transform:
              rotateX(-8deg)
              rotateY(-30deg)
              rotateZ(-1deg)
              translateY(0);
          }

          50% {
            transform:
              rotateX(-8deg)
              rotateY(-30deg)
              rotateZ(-1deg)
              translateY(-9px);
          }
        }

        /* =========================================
           SHADOW FLOAT
        ========================================== */

        @keyframes shadowFloat {

          0%,
          100% {
            transform: scaleX(1);
            opacity: 0.65;
          }

          50% {
            transform: scaleX(0.78);
            opacity: 0.35;
          }
        }

        /* =========================================
           REDUCE MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {

          .cube,
          .cube-shadow {
            animation: none;
          }

        }

        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 1023px) {

          .cube-scene {
            width: 145px;
            height: 145px;
          }

          .cube,
          .cube-face {
            width: 100px;
            height: 100px;
          }

          .cube-front {
            transform: translateZ(49px);
          }

          .cube-right {
            transform:
              rotateY(90deg)
              translateZ(49px);
          }

          .cube-top {
            transform:
              rotateX(90deg)
              translateZ(49px);
          }

          .cube-shadow {
            width: 96px;
          }

        }

        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 640px) {

          .cube-scene {
            width: 135px;
            height: 135px;
          }

          .cube,
          .cube-face {
            width: 92px;
            height: 92px;
          }

          .cube-front {
            transform: translateZ(45px);
          }

          .cube-right {
            transform:
              rotateY(90deg)
              translateZ(45px);
          }

          .cube-top {
            transform:
              rotateX(90deg)
              translateZ(45px);
          }

          .cube-shadow {
            width: 90px;
          }

        }

      `}</style>
    </>
  );
};

export default LoginPage;
