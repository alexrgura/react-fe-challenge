import {fetchData} from './Page';


describe('testing page component api calls fetchData function', () => {
    beforeEach(() => {
        fetch.resetMocks()
        fetch.mockResponseOnce(
            JSON.stringify({data: {part: {id: 1}}}),
            {headers: new Headers({'total-pages': 4, 'Content-Type': 'application/json'})}
        )
    
    })

    it('fetch function extracts proper headers', async () => {
        let headers = {}
        const setHeaders = (callback) => {
            headers = callback(headers)
        }
        await fetchData(1, ()=> {}, setHeaders)
        expect(headers['total-pages']).toBe("4")
    })

    it('fetch function extracts proper body', async () => {
        let responseBodyData = {};
        const changeData = (data) =>  {
            responseBodyData = data
        } 
        await fetchData(1, changeData, () => {})
        expect(responseBodyData.part.id).toBe(1)
    })
})