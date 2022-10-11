export class Mahasiswa {
    nim: number = 0;
    nama: string = "";
    jenisKelamin: string = "";

    setNim(nim: number){
        this.nim = nim;
    }
    setNama(nama: string){
        this.nama = nama;
    }
    setJenisKelamin(jenisKelamin: string){
        this.jenisKelamin = jenisKelamin;
    }

    getNim(): number {
        return this.nim;
    }
    getNama(): string {
        return this.nama;
    }
    getJenisKelamin(): string {
        return this.jenisKelamin;
    }
}
