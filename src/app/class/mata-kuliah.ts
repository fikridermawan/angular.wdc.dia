export class MataKuliah {
    kode: string = "";
    namaMatkul: string = "";
    sks: number = 0;

    setKode(kode: string){
        this.kode = kode;
    }
    setNamaMatkul(namaMatkul: string){
        this.namaMatkul = namaMatkul;
    }
    setSks(sks: number){
        this.sks = sks;
    }

    getKode(): string {
        return this.kode;
    }
    getNamaMatkul(): string {
        return this.namaMatkul;
    }
    getSks(): number {
        return this.sks;
    }
}
