#include <bits/stdc++.h>
using namespace std;
template <typename T>
class graph
{
public:
    map<T, list<T>> adj;
    void addEdge(T u, T v, bool direction)
    {
        adj[u].push_back(v);
        if (direction == 0)
            adj[v].push_back(u);
    }
    void printList()
    {
        cout << "x represents NULL" << endl
             << endl;
        for (auto i : adj)
        {
            cout << i.first << "->";
            for (auto j : i.second)
            {
                cout << j << ",";
            }
            cout << "x" << endl;
        }
    }
};
int main()
{
    int n, m;
    cout << "Enter nodes : ";
    cin >> n;
    cout << "Enter edges : ";
    cin >> m;
    set<int,int>ans;
    graph<int> g;
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        g.addEdge(u, v, 0);
    }
    g.printList();
    return 0;
}