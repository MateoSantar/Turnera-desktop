import Table from "@/app/ui/table";
export default async function Page() {
    // const res = await fetch('http://localhost:3000/api/users',{
    //     method:"POST"
    // });
    const data = [{
        id: 1,
        email: "testing@testing.com",
        password: "aaaaa"
    }, {
        id: 2,
        email: "testing@testing.com",
        password: "aaaaa"
    }, {
        id: 3,
        email: "testing@testing.com",
        password: "aaaaa"
    }, {
        id: 4,
        email: "testing@testing.com",
        password: "aaaaa"
    },]  //await res.json(); 
    // data = data.data;

    return (
        <section className="grid grid-cols-2 gap-2 w-screen p-3">
            <div className="text-center">
                <Table
                    data={data}
                    columnNames={["id", "email", "password"]}
                />
            </div>
            <div className="text-center">
                <Table
                    data={data}
                    columnNames={["id", "email", "password"]}
                />
            </div>
            <div className="text-center">
                <Table
                    data={data}
                    columnNames={["id", "email", "password"]}
                />
            </div>
        </section>
    );
}