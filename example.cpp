#include <eosio/eosio.hpp>

using namespace eosio;

class [[eosio::contract]] example : public contract {
    public:
    using contract::contract;

    struct custom {
        std::string      message;
        std::string      extra;
    };

    // Checks the input param `message` and returns serialized std::string instance.
    [[eosio::action]]
    std::string stringvalue( const std::string message )
    {
        return message;
    }

    [[eosio::action]]
    example::custom customvalue( const example::custom message )
    {
        return message;
    }

    [[eosio::action]]
    uint64_t numbervalue( const uint64_t message )
    {
        return message;
    }

    [[eosio::action]]
    name namevalue( const name message )
    {
        return message;
    }

    [[eosio::action]]
    std::vector<std::string> vectorvalue( const std::vector<std::string> message )
    {
        return message;
    }
};
