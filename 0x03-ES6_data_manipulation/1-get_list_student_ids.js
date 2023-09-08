function getListStudentIds(a) {
    if (!Array.isArray(a)) return []
    return a.map(i => i.id);
}
export default getListStudentIds;
