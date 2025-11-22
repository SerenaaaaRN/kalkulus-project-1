import numpy as np
import sympy as sp
from IPython.display import display
import solver

if __name__ == "__main__":
    print("="*80)
    print(" PENYELESAIAN PERSAMAAN DIFERENSIAL LINEAR ORDE 1".center(80))
    print(" dy/dx + P(x)y = Q(x)".center(80))
    print("="*80)

    print("\nINPUT PERSAMAAN DIFERENSIAL")
    print("-" * 80)
    print("Masukkan fungsi P(x) dan Q(x) dalam notasi Python/SymPy")
    print("Contoh: 2*x, x**2, sin(x), cos(x), exp(x), 1/x, sqrt(x), dll.\n")

    ekspresiP = input("Masukkan P(x): ").strip() or "1"
    ekspresiQ = input("Masukkan Q(x): ").strip() or "x"

    print("\n📊 KONDISI AWAL DAN PARAMETER")
    print("-" * 80)

    inputX0 = input("Nilai awal x₀ [default: 0]: ").strip()
    x0 = float(inputX0) if inputX0 else 0.0

    inputY0 = input("Nilai awal y₀ [default: 1]: ").strip()
    y0 = float(inputY0) if inputY0 else 1.0

    inputXAkhir = input("Nilai akhir x [default: 2]: ").strip()
    xAkhir = float(inputXAkhir) if inputXAkhir else 2.0

    inputH = input("Step size h (untuk plotting) [default: 0.1]: ").strip()
    h = float(inputH) if inputH else 0.1

    print("\n" + "="*80)
    print(" INFORMASI PERSAMAAN".center(80))
    print("="*80)
    print(f"\n📌 Persamaan: dy/dx + ({ekspresiP})y = {ekspresiQ}")
    print(f"📌 Kondisi awal: y({x0}) = {y0}")
    print(f"📌 Interval: x ∈ [{x0}, {xAkhir}]")
    print(f"📌 Step size: h = {h}")

    try:
        x = sp.Symbol('x')
        simbolP = sp.sympify(ekspresiP)
        simbolQ = sp.sympify(ekspresiQ)

        solver.tampilkanSolusiManual(simbolP, simbolQ, x0, y0)

        print("\n" + "="*80)
        print(" SOLUSI EKSAK (SYMPY DSOLVE)".center(80))
        print("="*80)
        print("\n⏳ Mencoba menghitung solusi eksak dengan SymPy...")

        nilaiX = None
        nilaiYEksak = None
        solusiEksak = None

        try:
            y = sp.Function('y')
            pdb = sp.Eq(y(x).diff(x) + simbolP * y(x), simbolQ)
            solusiEksak = sp.dsolve(pdb, y(x), ics={y(x0): y0})

            jumlahLangkah = int((xAkhir - x0) / h) + 1
            nilaiX = np.linspace(x0, xAkhir, jumlahLangkah)

            fungsiYEksak = sp.lambdify(x, solusiEksak.rhs, 'numpy')
            nilaiYEksak = fungsiYEksak(nilaiX)

            print(f"✅ Solusi eksak simbolik ditemukan!\n")
            display(solusiEksak)

        except Exception as e:
            print(f"⚠ Solusi eksak SymPy tidak dapat dihitung: {e}")

        print("\n" + "="*80)
        print(" TABEL HASIL SOLUSI EKSAK (10 titik pertama)".center(80))
        print("="*80)

        if nilaiX is not None and nilaiYEksak is not None:
            print(f"{'x':>15} {'y_Eksak':>20}")
            print("-" * 80)

            titikTampil = min(10, len(nilaiX))
            for i in range(titikTampil):
                print(f"{nilaiX[i]:>15.4f} {nilaiYEksak[i]:>20.8f}")

            if len(nilaiX) > 10:
                print("   ...")
                i = -1
                print(f"{nilaiX[i]:>15.4f} {nilaiYEksak[i]:>20.8f}")
        else:
            print("⚠ Tidak ada data tabel untuk ditampilkan.")

        judulPlot = f"Solusi Eksak: dy/dx + ({ekspresiP})y = {ekspresiQ}"
        solver.plotSolusiEksak(nilaiX, nilaiYEksak, judul=judulPlot)

        print("\n" + "="*80)
        print(" ✅ PROGRAM SELESAI!".center(80))
        print("="*80)

    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        print("Pastikan input P(x) dan Q(x) menggunakan sintaks yang benar!")
        print("Contoh valid: 2*x, x**2, sin(x), cos(x), exp(x), 1/x")