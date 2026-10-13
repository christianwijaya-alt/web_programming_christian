// ingat! bahwa React menyediakan objek SyntheticEvent
// pass object event e secara eksplisit

function TombolDetail() {
    const handleDetail = (id, e) => {
        console.log("Event Type:", e.type); // 'click'
        console.log("Detail ID:", id);
    };
    return (
        <button onClick={(e) => handleDetail(42, e)}>
            Lihat Detail
        </button>
    );
}
export default TombolDetail;