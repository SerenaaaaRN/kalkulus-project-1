import numpy as np
import matplotlib.pyplot as plt
import sympy as sp
from IPython.display import display, Latex

def tampilkanSolusiManual(simbolP, simbolQ, x0, y0):
    print("\n" + "="*80)
    print(" SOLUSI MANUAL (METODE FAKTOR INTEGRASI)".center(80))
    print("="*80)

    x = sp.Symbol('x')

    print("\n📌 Langkah 1: Persamaan Diferensial Linear Orde 1")
    display(Latex(r"$$\frac{dy}{dx} + P(x)y = Q(x)$$"))
    display(Latex(rf"$$\frac{{dy}}{{dx}} + \left({sp.latex(simbolP)}\right)y = {sp.latex(simbolQ)}$$"))

    print("\n📌 Langkah 2: Menentukan Faktor Integrasi")
    display(Latex(r"$$\mu(x) = e^{\int P(x)\,dx}$$"))

    try:
        integralP = sp.integrate(simbolP, x)
        display(Latex(rf"$$\int P(x)\,dx = \int \left({sp.latex(simbolP)}\right)\,dx = {sp.latex(integralP)}$$"))

        faktorIntegrasi = sp.exp(integralP)
        faktorIntegrasiSederhana = sp.simplify(faktorIntegrasi)
        display(Latex(rf"$$\mu(x) = e^{{{sp.latex(integralP)}}} = {sp.latex(faktorIntegrasiSederhana)}$$"))

        print("\n📌 Langkah 3: Kalikan persamaan dengan faktor integrasi μ(x)")
        display(Latex(rf"$$\mu(x) \cdot \frac{{dy}}{{dx}} + \mu(x) \cdot P(x) \cdot y = \mu(x) \cdot Q(x)$$"))

        print("\n📌 Langkah 4: Persamaan menjadi turunan dari μ(x)·y")
        display(Latex(r"$$\frac{d}{dx}[\mu(x) \cdot y] = \mu(x) \cdot Q(x)$$"))

        ruasKanan = faktorIntegrasiSederhana * simbolQ
        display(Latex(rf"$$\frac{{d}}{{dx}}[{sp.latex(faktorIntegrasiSederhana)} \cdot y] = {sp.latex(ruasKanan)}$$"))

        print("\n📌 Langkah 5: Integralkan kedua ruas terhadap x")
        display(Latex(rf"$$\int \frac{{d}}{{dx}}[{sp.latex(faktorIntegrasiSederhana)} \cdot y]\,dx = \int {sp.latex(ruasKanan)}\,dx$$"))

        try:
            integralRuasKanan = sp.integrate(ruasKanan, x)
            display(Latex(rf"$${sp.latex(faktorIntegrasiSederhana)} \cdot y = {sp.latex(integralRuasKanan)} + C$$"))

            print("\n📌 Langkah 6: Solusi Umum")
            konstantaC = sp.Symbol('C')
            solusiUmum = (integralRuasKanan + konstantaC) / faktorIntegrasiSederhana
            solusiUmumSederhana = sp.simplify(solusiUmum)
            display(Latex(rf"$$y = \frac{{{sp.latex(integralRuasKanan)} + C}}{{{sp.latex(faktorIntegrasiSederhana)}}}$$"))
            display(Latex(rf"$$y = {sp.latex(solusiUmumSederhana)}$$"))

            print("\n📌 Langkah 7: Terapkan Kondisi Awal")
            display(Latex(rf"$$y({x0}) = {y0}$$"))

            nilaiYdiX0 = solusiUmumSederhana.subs(x, x0)
            persamaanC = sp.Eq(nilaiYdiX0, y0)
            display(Latex(rf"$${sp.latex(nilaiYdiX0)} = {y0}$$"))

            try:
                nilaiC = sp.solve(persamaanC, konstantaC)[0]
                display(Latex(rf"$$C = {sp.latex(nilaiC)}$$"))

                print("\n📌 Langkah 8: Solusi Khusus (Particular Solution)")
                solusiKhusus = solusiUmumSederhana.subs(konstantaC, nilaiC)
                solusiKhususSederhana = sp.simplify(solusiKhusus)
                display(Latex(rf"$$y(x) = {sp.latex(solusiKhususSederhana)}$$"))

            except:
                print("   ⚠ Tidak dapat menentukan konstanta C secara simbolik")
        except:
            print("   ⚠ Integral ruas kanan terlalu kompleks untuk diselesaikan secara simbolik")

    except Exception as e:
        print(f"   ⚠ Solusi manual tidak dapat ditampilkan: {e}")

def plotSolusiEksak(nilaiX, nilaiY, judul=""):
    if nilaiX is None or nilaiY is None:
        print("\n⚠ Tidak ada data untuk di-plot (mungkin solusi eksak gagal).")
        return

    print("\n Membuat visualisasi grafik untuk Solusi Eksak...")
    plt.figure(figsize=(10, 6))
    plt.plot(nilaiX, nilaiY, 'r-', label='Solusi Eksak (SymPy)', linewidth=2.5, alpha=0.8)

    plt.xlabel('x', fontsize=12, fontweight='bold')
    plt.ylabel('y', fontsize=12, fontweight='bold')
    plt.title('Plot Solusi Eksak', fontsize=13, fontweight='bold')
    plt.legend(loc='best', fontsize=10)
    plt.grid(True, alpha=0.4)

    plt.suptitle(judul, fontsize=15, fontweight='bold', y=1.02)
    plt.tight_layout()
    plt.show()