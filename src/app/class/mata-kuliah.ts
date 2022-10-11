export class MataKuliah {
    kode: number = 0;
    namaMatkul: string = "";
    sks: number = 0;

    setKode(kode: number){
        this.kode = kode;
    }
    setNamaMatkul(namaMatkul: string){
        this.namaMatkul = namaMatkul;
    }
    setSks(sks: number){
        this.sks = sks;
    }

    getKode(): number {
        return this.kode;
    }
    getNamaMatkul(): string {
        return this.namaMatkul;
    }
    getSks(): number {
        return this.sks;
    }
}
