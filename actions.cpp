#include <eosio/eosio.hpp>

using namespace eosio;
using namespace std;

class [[eosio::contract]] actions : public contract {
    public:
    using contract::contract;

    struct custom {
        name        message;
        string      extra;
        uint64_t    number;
    };

    // Checks the input param `message` and returns serialized string instance.
    [[eosio::action]]
    string stringvalue( const string message )
    {
        return message;
    }

    [[eosio::action]]
    actions::custom customvalue( const name message, const string extra, const uint64_t number )
    {
        return actions::custom{message, extra, number};
    }

    [[eosio::action]]
    uint64_t numbervalue( const uint64_t number )
    {
        return number;
    }

    [[eosio::action]]
    name namevalue( const name message )
    {
        return message;
    }

    [[eosio::action]]
    vector<string> vectorvalue( const vector<string> message )
    {
        return message;
    }
};
